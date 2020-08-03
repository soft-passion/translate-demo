const { ScrapeService } = require('../../../services');

module.exports = async (req, res) => {
  try {
    const contents = await ScrapeService.translateUrl (
      req.query.url,
    );
    
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(contents);
    res.end();
  } catch (err) {
    res.status(200).json({
      status: 'error',
      err,
    });
    next();
  }
};