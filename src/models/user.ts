import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

export interface UserI {
  id?: number;
  name?: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  modelName: "User",
  tableName: "users",
  timestamps: true,
})
export class User extends Model<UserI> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id!: number;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public email!: string;

  @Column(DataType.DATE)
  public createdAt!: Date;

  @Column(DataType.DATE)
  public updatedAt!: Date;
}
