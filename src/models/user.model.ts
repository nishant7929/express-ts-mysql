import { AllowNull, AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { UserAttributes } from "../interface/user.interface";

@Table({
	tableName: 'users',
	timestamps: true,
	createdAt: 'created_at',
	updatedAt: 'updated_at',
})
class User extends Model<UserAttributes> {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
	})
	public id!: number;

	@Column({
		type: DataType.STRING,
		allowNull: false
	})
	public username!: string;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false
	})
	public email!: string;

	@AllowNull(false)
	@Column(DataType.STRING)
	public password!: string;
}

export default User;

