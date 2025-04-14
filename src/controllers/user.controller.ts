import { Request, Response } from 'express';
import userService from '../services/user.service';

class UserController {
	async create(req: Request, res: Response) {
		try {
			const user = await userService.create(req.body);
			res.status(201).json(user);
		} catch (err) {
			res.status(500).json({ message: 'Error while creating user', error: err });
		}
	}

	async findAll(_req: Request, res: Response) {
		const users = await userService.findAll();
		res.json(users);
	}

	async findOne(req: Request<{ id: string }>, res: Response) {
		const user = await userService.findOne(Number(req.params.id));
		if (!user) res.status(404).json({ message: 'User not found' });
		res.json(user);
	}

	async update(req: Request, res: Response) {
		const updated = await userService.update(Number(req.params.id), req.body);
		if (!updated) res.status(404).json({ message: 'User not found' });
		res.json(updated);
	}

	async delete(req: Request, res: Response) {
		const deleted = await userService.delete(Number(req.params.id));
		if (!deleted) res.status(404).json({ message: 'User not found' });
		res.json({ message: 'User deleted successfully' });
	}
}

export default new UserController();
