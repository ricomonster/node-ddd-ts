import {Model, Column, Table, CreatedAt, UpdatedAt, Unique, PrimaryKey} from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id!: number;

  @Column
  name!: string;

  @Unique
  @Column
  email!: string;

  @Column
  password!: string;

  @Column({
    field: 'verified_at',
  })
  verifiedAt!: Date;

  @CreatedAt
  @Column({
    field: 'created_at',
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at',
  })
  updatedAt!: Date;
}
