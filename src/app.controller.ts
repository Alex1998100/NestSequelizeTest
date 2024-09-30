import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SqlService } from './app.service';
import { User } from './user.model';
import { PostDto } from './addUser.dto';
import internal from 'stream';

@Controller('api/v1/')
export class AppController {
  constructor(private readonly sqlService: SqlService) {}

  @Post('add-user')
  async addUser(@Body() x: PostDto) {
    const connect = this.sqlService.sqlConnection;
    return await User.create({ firstName: x.name})
    .then( x=> {
      if (x) {
        return x;
      }});
  }

  @Get('get-user/:id')
  async getUser(@Param('id') x: number) {
    return await User.findOne({ where:{id: x}}).then(x=>{
      return x;
    })
  }
}
