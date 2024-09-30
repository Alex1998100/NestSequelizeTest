import {
    Sequelize,
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
  } from '@sequelize/core';
  const { Attribute, PrimaryKey , AutoIncrement, NotNull} = require('@sequelize/core/decorators-legacy');
  import { MySqlDialect } from '@sequelize/mysql';
  
  const sequelize = new Sequelize({ dialect: MySqlDialect });
  
  export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;
  
    @Attribute(DataTypes.STRING)
    @NotNull
    declare firstName: string;

  }