const { FileService } = require('../../../services');

module.exports = async (req, res) => {
  try {
    const filename = await FileService.uploadFile ({
      ...req,
    });
    res.success({
      filename
    });
  } catch (err) {
    console.log(err);
    res.error({
      message: err,
    });
  }
};
