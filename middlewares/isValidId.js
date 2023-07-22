const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    res.status(404).json({
      message: "Not found",
    });
    return;
  }
  next();
};

module.exports = isValidId;
