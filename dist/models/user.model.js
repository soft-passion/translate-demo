'use strict';

/*
 This model is one for user's profile
*/

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _base = require('./_base.model');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Schema = _mongoose2.default.Schema;

var UserModel = function (_BaseModel) {
  _inherits(UserModel, _BaseModel);

  function UserModel() {
    _classCallCheck(this, UserModel);

    var schema = {
      username: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      password: {
        type: String,
        trim: true
      }
    };

    return _possibleConstructorReturn(this, (UserModel.__proto__ || Object.getPrototypeOf(UserModel)).call(this, 'User', schema));
  }

  return UserModel;
}(_base2.default);

var userModel = new UserModel();
module.exports = {
  User: userModel
};
//# sourceMappingURL=user.model.js.map