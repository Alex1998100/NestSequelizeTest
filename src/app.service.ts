import { Injectable } from '@nestjs/common';
import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';
import {User} from './user.model'

@Injectable()
export class SqlService { 
  public readonly sqlConnection : Sequelize<MySqlDialect>
  constructor() {
    if (!this.sqlConnection) {
      this.sqlConnection = this.getConnect();
    }
  }
  getConnect():Sequelize<MySqlDialect> {
    const sequelize = new Sequelize({
      dialect: MySqlDialect,
      database: 'sequelize',
      user: 'sequelize',
      password: 'sequelize',
      host: 'localhost',
      port: 3306,
      models: [User],
    });
    return sequelize
  }
}
