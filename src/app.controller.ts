import { Controller, Get,Req,Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Req() request:Request): {}[] {
    return [
      {origin:"Miami",destination:'Chicago',flightNumber:345,depart:new Date('2020-02-25T23:18:21.932Z'),
      arrive:new Date('2020-02-25T23:21:21.932Z'),nonstop:true},
      {origin:"New York",destination:'Rabat',flightNumber:432,depart:new Date('2020-05-25T23:18:00.932Z'),
      arrive:new Date('2020-05-25T23:23:21.932Z'),nonstop:false},
      ]
  }
}
