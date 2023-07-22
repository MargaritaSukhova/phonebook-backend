const express = require("express");

const {
  getAllController,
  addContactController,
  delContactController,
} = require("../controllers/contactsControllers");

const isValidId = require("../middlewares/isValidId");

const contactValidator = require("../middlewares/validateContact");

const router = express.Router();

router.get("/", getAllController);

router.post("/", contactValidator, addContactController);

router.delete("/:contactId", isValidId, delContactController);

module.exports = router;
