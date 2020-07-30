'use strict';

/*
 This model is one for user's profile
*/

import mongoose from 'mongoose';
import BaseModel from './_base.model';

const { Schema } = mongoose;

class UserModel extends BaseModel {
  constructor() {
    const schema = {
      username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      password: {
        type: String,
        trim: true,
      },
    };

    super('User', schema);
  }
}

const userModel = new UserModel();
module.exports = {
  User: userModel,
};
