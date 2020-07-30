const { ScrapeService } = require('../../../services');

module.exports = async (req, res) => {
  try {
    const contents = await ScrapeService.parseUrl (
      req.query.url,
    );
    res.success({
      contents,
    });
  } catch (err) {
    res.error({
      message: err,
    });
  }
};
