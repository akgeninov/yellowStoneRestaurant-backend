const express = require('express');
const contactsRouter = require('../controller/contactController')

const router = express.Router();

// POST MESSAGE
// router.post("/", contactsRouter.addMessage)
// // GET ALL MESSAGE
// router.get("/messages", SendMessage.getMessage)

// router.post("/backfill-contacts", contactsRouter.backFillContacts)
router.get("/contacts", contactsRouter.getContacts)
router.post("/add-contact", contactsRouter.addContact)

module.exports = router;
