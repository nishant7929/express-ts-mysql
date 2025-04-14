import User from '../models/user.model';

class UserService {
	async create(data: any) {
		return User.create(data);
	}

	async findAll() {
		return User.findAll();
	}

	async findOne(id: number) {
		return User.findByPk(id);
	}

	async update(id: number, data: any) {
		const user = await User.findByPk(id);
		if (!user) return null;
		return user.update(data);
	}

	async delete(id: number) {
		const user = await User.findByPk(id);
		if (!user) return null;
		return user.destroy();
	}
}

export default new UserService();
