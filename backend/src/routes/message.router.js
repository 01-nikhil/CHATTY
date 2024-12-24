import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { clearMessages, getMessages, getUsersForSidebar, sendMessages } from '../controllers/message.controller.js';

const router=express.Router();

router.get('/users',protectRoute,getUsersForSidebar);
router.get('/:id',protectRoute,getMessages);
router.post('/send/:id',protectRoute,sendMessages);
router.delete('/clear/:id',protectRoute,clearMessages)

export default router;