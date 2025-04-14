import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
	async findAll(_req: Request, res: Response) {
		const users= await userService.findAll();
		res.json(users);
	  }
}

export default new UserController();
