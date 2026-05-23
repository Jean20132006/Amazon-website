import { Router } from 'express';
import { registerUser, loginUser, logoutuser } from "../controllers/user.controllers.js";

const router = Router();
//password: tsanga
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutuser);
router.route('/profile')

export default router;