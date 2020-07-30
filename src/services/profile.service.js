/*
 This file provides apis related with profile.
*/
const _ = require('lodash');
import bcrypt from 'bcrypt'
import { User } from '../models/user.model';
import Errors  from '../constants/error.constant';

/*
 * Create new profile
 *
 * @ Required params
 * @@ phone (String : Required)
 *
 * @ return created User Object
 *
 */
const createProfile = async ({ ...params }) => {
  const {
    username,
    password
  } = params;

  if (!username || !password) {
    throw Errors.NO_PARAM;
  }
  
  try {
    const hashPwd = await bcrypt.hash(password, 10)
    const user = await User.create({
      username,
      password: hashPwd,
    });

    return user;
  } catch (err) {
    throw err;
  }
};

const findProfileById = async (id) => {
  try {
    let user;
    // To do : find from cache

    if (!user) {
      user = await User.findOneById(id);
    }

    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createProfile,
  findProfileById
};
