'use strict';
/*
 This file is basic model.
 It helps to each document of collection has "created" and "updated" times.
*/
import mongoose from 'mongoose';

const { Schema } = mongoose;

export default class BaseModel {
  constructor(name, schema, indexes) {
    if (!name) name = 'base';

    if (!schema) schema = {};

    Object.assign(schema, {
      created: {
        type: Date,
        required: false,
      },
      updated: {
        type: Date,
        required: false,
      },
    });

    this.schema = Schema(schema);

    if (indexes) {
      this.schema.index(indexes);
    }

    this.schema.pre('create', this.createMiddleware);
    this.schema.pre('insertMany', this.createMiddleware);
    this.schema.pre('save', this.createMiddleware);
    this.schema.pre('update', this.updateMiddleware);
    this.schema.pre('updateMany', this.updateMiddleware);
    this.schema.pre('updateOne', this.updateMiddleware);

    this.model = mongoose.model(name, this.schema);
  }

  async aggregate(params) {
    return this.model.aggregate(params).allowDiskUse(true);
  }

  async create(params) {
    return this.model.create(params);
  }

  async deleteOne(params) {
    return this.model.deleteOne(params);
  }

  async deleteMany(params) {
    return this.model.deleteMany({ _id: { $in: params } }, { multi: true });
  }

  async deleteManyByQuery(query) {
    return this.model.deleteMany(query, { multi: true });
  }

  async find(params) {
    return this.model.find(params);
  }

  async findWithLean(params) {
    return this.model.find(params).lean();
  }

  async findOne(params) {
    return this.model.findOne(params);
  }

  async findOneById(id) {
    return this.model.findOne({ _id: new mongoose.Types.ObjectId(id) });
  }

  async findWithPagenation(searchKey, sorting, pageNum, limits) {
    return this.model.find(searchKey).sort(sorting).skip(pageNum).limit(limits);
  }

  async getTotalNum(params) {
    return this.model.find(params).countDocuments();
  }

  async insertMany(collections) {
    return this.model.collection.insertMany(collections);
  }

  async update(query, update) {
    return this.model.update(query, update, { multi: true });
  }

  async updateOne(query, update) {
    return this.model.updateOne(query, update);
  }

  async updateMany(query, update) {
    return this.model.updateMany(query, update);
  }

  async updateDocuments(data) {
    return this.model.bulkWrite(
      data.map((obj) => {
        const { _id, data } = obj;

        return {
          updateOne: {
            filter: { _id: _id },
            update: {
              $set: {
                data,
                updated: Date.now(),
              },
            },
          },
        };
      }),
    );
  }

  async updateById(params) {
    let { _id, id, ...others } = params;
    id = this.getId(params);
    if (id) {
      return this.model.updateOne({ _id: id }, { $set: others });
    }

    return Promise.reject();
  }

  convertToDbId(id) {
    try {
      if (id) return new mongoose.Types.ObjectId(id);
    } catch (err) {}
    return null;
  }

  async createMiddleware(next) {
    let model = this;
    if (!model.created) {
      model.created = Date.now();
      model.updated = model.created;
    } else {
      model.updated = Date.now();
    }

    next();
  }

  async updateMiddleware(next) {
    this.update({}, { $set: { updated: Date.now() } });
    next();
  }

  async remove() {
    return this.model.remove();
  }
}
