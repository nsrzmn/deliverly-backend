import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

export interface StreetI {
  id?: number;
  name?: string;
  sequence?: number;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  modelName: "Street",
  tableName: "Streets",
  timestamps: true,
})
export class Street extends Model<StreetI> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id!: number;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.INTEGER)
  public sequence!: number;

  @Column(DataType.INTEGER)
  public userId!: number;

  @Column(DataType.DATE)
  public createdAt!: Date;

  @Column(DataType.DATE)
  public updatedAt!: Date;
}
