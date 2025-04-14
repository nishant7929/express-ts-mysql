import User from "../models/user.model";

class UserService {
	async findAll() {
		return User.findAll();
	}
}

export default new UserService();
