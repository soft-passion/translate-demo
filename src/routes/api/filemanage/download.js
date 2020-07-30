const { FileService } = require('../../../services');

module.exports = async (req, res) => {
  try {
    const file = await FileService.downloadFile(req.params.identifier);
    res.download(file, (err) => {
      if (err) {
        throw "File download fail"
      }
      return;
    });
  } catch (err) {
    console.log(err);
    res.error({
      message: err,
    });
  }
};
