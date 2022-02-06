import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FlightsService } from './flights/flights.service';
import { Flights } from './model/flights.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello():string{
    return 'hello'
  }


}
