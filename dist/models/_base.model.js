'use strict';
/*
 This file is basic model.
 It helps to each document of collection has "created" and "updated" times.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Schema = _mongoose2.default.Schema;

var BaseModel = function () {
  function BaseModel(name, schema, indexes) {
    _classCallCheck(this, BaseModel);

    if (!name) name = 'base';

    if (!schema) schema = {};

    Object.assign(schema, {
      created: {
        type: Date,
        required: false
      },
      updated: {
        type: Date,
        required: false
      }
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

    this.model = _mongoose2.default.model(name, this.schema);
  }

  _createClass(BaseModel, [{
    key: 'aggregate',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', this.model.aggregate(params).allowDiskUse(true));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function aggregate(_x) {
        return _ref.apply(this, arguments);
      }

      return aggregate;
    }()
  }, {
    key: 'create',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', this.model.create(params));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x2) {
        return _ref2.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: 'deleteOne',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', this.model.deleteOne(params));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deleteOne(_x3) {
        return _ref3.apply(this, arguments);
      }

      return deleteOne;
    }()
  }, {
    key: 'deleteMany',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', this.model.deleteMany({ _id: { $in: params } }, { multi: true }));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deleteMany(_x4) {
        return _ref4.apply(this, arguments);
      }

      return deleteMany;
    }()
  }, {
    key: 'deleteManyByQuery',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(query) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt('return', this.model.deleteMany(query, { multi: true }));

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function deleteManyByQuery(_x5) {
        return _ref5.apply(this, arguments);
      }

      return deleteManyByQuery;
    }()
  }, {
    key: 'find',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(params) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt('return', this.model.find(params));

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function find(_x6) {
        return _ref6.apply(this, arguments);
      }

      return find;
    }()
  }, {
    key: 'findWithLean',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt('return', this.model.find(params).lean());

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findWithLean(_x7) {
        return _ref7.apply(this, arguments);
      }

      return findWithLean;
    }()
  }, {
    key: 'findOne',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(params) {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt('return', this.model.findOne(params));

              case 1:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function findOne(_x8) {
        return _ref8.apply(this, arguments);
      }

      return findOne;
    }()
  }, {
    key: 'findOneById',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(id) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt('return', this.model.findOne({ _id: new _mongoose2.default.Types.ObjectId(id) }));

              case 1:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function findOneById(_x9) {
        return _ref9.apply(this, arguments);
      }

      return findOneById;
    }()
  }, {
    key: 'findWithPagenation',
    value: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(searchKey, sorting, pageNum, limits) {
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt('return', this.model.find(searchKey).sort(sorting).skip(pageNum).limit(limits));

              case 1:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function findWithPagenation(_x10, _x11, _x12, _x13) {
        return _ref10.apply(this, arguments);
      }

      return findWithPagenation;
    }()
  }, {
    key: 'getTotalNum',
    value: function () {
      var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(params) {
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt('return', this.model.find(params).countDocuments());

              case 1:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getTotalNum(_x14) {
        return _ref11.apply(this, arguments);
      }

      return getTotalNum;
    }()
  }, {
    key: 'insertMany',
    value: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(collections) {
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt('return', this.model.collection.insertMany(collections));

              case 1:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function insertMany(_x15) {
        return _ref12.apply(this, arguments);
      }

      return insertMany;
    }()
  }, {
    key: 'update',
    value: function () {
      var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(query, _update) {
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt('return', this.model.update(query, _update, { multi: true }));

              case 1:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function update(_x16, _x17) {
        return _ref13.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: 'updateOne',
    value: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(query, update) {
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt('return', this.model.updateOne(query, update));

              case 1:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function updateOne(_x18, _x19) {
        return _ref14.apply(this, arguments);
      }

      return updateOne;
    }()
  }, {
    key: 'updateMany',
    value: function () {
      var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(query, update) {
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt('return', this.model.updateMany(query, update));

              case 1:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function updateMany(_x20, _x21) {
        return _ref15.apply(this, arguments);
      }

      return updateMany;
    }()
  }, {
    key: 'updateDocuments',
    value: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(data) {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt('return', this.model.bulkWrite(data.map(function (obj) {
                  var _id = obj._id,
                      data = obj.data;


                  return {
                    updateOne: {
                      filter: { _id: _id },
                      update: {
                        $set: {
                          data: data,
                          updated: Date.now()
                        }
                      }
                    }
                  };
                })));

              case 1:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function updateDocuments(_x22) {
        return _ref16.apply(this, arguments);
      }

      return updateDocuments;
    }()
  }, {
    key: 'updateById',
    value: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(params) {
        var _id, id, others;

        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _id = params._id, id = params.id, others = _objectWithoutProperties(params, ['_id', 'id']);

                id = this.getId(params);

                if (!id) {
                  _context17.next = 4;
                  break;
                }

                return _context17.abrupt('return', this.model.updateOne({ _id: id }, { $set: others }));

              case 4:
                return _context17.abrupt('return', Promise.reject());

              case 5:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function updateById(_x23) {
        return _ref17.apply(this, arguments);
      }

      return updateById;
    }()
  }, {
    key: 'convertToDbId',
    value: function convertToDbId(id) {
      try {
        if (id) return new _mongoose2.default.Types.ObjectId(id);
      } catch (err) {}
      return null;
    }
  }, {
    key: 'createMiddleware',
    value: function () {
      var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(next) {
        var model;
        return regeneratorRuntime.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                model = this;

                if (!model.created) {
                  model.created = Date.now();
                  model.updated = model.created;
                } else {
                  model.updated = Date.now();
                }

                next();

              case 3:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function createMiddleware(_x24) {
        return _ref18.apply(this, arguments);
      }

      return createMiddleware;
    }()
  }, {
    key: 'updateMiddleware',
    value: function () {
      var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(next) {
        return regeneratorRuntime.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                this.update({}, { $set: { updated: Date.now() } });
                next();

              case 2:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function updateMiddleware(_x25) {
        return _ref19.apply(this, arguments);
      }

      return updateMiddleware;
    }()
  }, {
    key: 'remove',
    value: function () {
      var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt('return', this.model.remove());

              case 1:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function remove() {
        return _ref20.apply(this, arguments);
      }

      return remove;
    }()
  }]);

  return BaseModel;
}();

exports.default = BaseModel;
//# sourceMappingURL=_base.model.js.map