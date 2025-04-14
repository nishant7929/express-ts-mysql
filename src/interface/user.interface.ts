import { Model } from "sequelize-typescript";

export interface UserAttributes {
	id: number;
	username: string;
	email: string;
	password: string;
}

export type UserInstance = Model<UserAttributes, UserAttributes>;

