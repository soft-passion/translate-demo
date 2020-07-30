
import Errors from '../constants/error.constant';
import UploadPath from '../constants/path.constant';

const uploadFile = async ({...params}) => {
  try {
    return params.file.filename;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const downloadFile = async(identifier) => {
  if (!identifier) {
    throw Errors.NO_URL;
  }
  try {
    const file = UploadPath.baseDir+identifier;
    return file
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  uploadFile,
  downloadFile
};