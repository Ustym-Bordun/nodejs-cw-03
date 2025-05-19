import express from 'express';

import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
  deleteContactController,
  createContactController,
  upsertContactController,
  patchContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

router.post('/contacts', jsonParser, ctrlWrapper(createContactController));

router.put(
  '/contacts/:contactId',
  jsonParser,
  ctrlWrapper(upsertContactController),
);

router.patch(
  '/contacts/:contactId',
  jsonParser,
  ctrlWrapper(patchContactController),
);

export default router;
