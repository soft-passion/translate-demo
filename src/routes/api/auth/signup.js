const { ProfileService } = require('../../../services');

module.exports = async (req, res) => {
  try {
    const users = await ProfileService.createProfile (
      req.body,
    );
    res.success({
      users,
    });
  } catch (err) {
    res.error({
      message: err,
    });
  }
};
