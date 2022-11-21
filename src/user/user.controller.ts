import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put,  Res, } from '@nestjs/common';
import { userDto } from 'src/dto/user.dto';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService) {}

@Get()
  async getAllUser(@Res() res: Response) {
    try {
    const data = await this.service.listCustomer();
    res.status(HttpStatus.OK).json(data);
  } catch(err){
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
  }
  }

  @Post('signup')
  async  createUser(@Res() res: Response, @Body() customerParam: userDto) {
    try {
    const data = await this.service.createCustomer(customerParam);
    res.status(HttpStatus.OK).json(data);
    } catch(err){
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    }
  }

  @Get(':id')
  async getUserById( @Param('id') id: string) {
    return await this.service.getCustomer(id);
  }



  @Delete(':id')
  async deleteUserById(@Param('id') id: string) {
    return await this.service.removeCustomer(id);
  }
  @Put(':id')
  async updateUserById(@Res() res: Response, @Param('id') id: string,  @Body() Params: userDto ){
   try{
    const data = await this.service.updateCustomer(id, Params);
    res.status(HttpStatus.OK).json(data);
   } catch(err)
   {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
   } 
  }
}

