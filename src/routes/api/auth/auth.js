const { User } = require('../../../models/user.model');
const {
  AuthService,
} = require('../../../services');
import bcrypt from 'bcrypt';

module.exports = async (req, res) => {
  const { username, password } = req.params;

  try {
    // Validate parameters existence
    if (!username || !password) {
      res.error({
        message: "Username and password don't be empty", 
      });
      return next();
    }

    const user = await User.findOne({ username });
    if (!user) {
      res.error({
        message: "User doesn't exist"
      });
      return next();
    } else {
      if (!bcrypt.compare(password, user.password)) {
        res.error({
          message: "Password doesn't match"
        });
        return next();
      }
    }

    res.success({
      user,
      token: AuthService.generateToken(user),
      message: 'User Login Success', 
    });
  } catch (err) {
    res.error({
      message: err.message,
    });
  }
};
