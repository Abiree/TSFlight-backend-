import { Controller, Get, Param } from '@nestjs/common';
import { Flights } from 'src/model/flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
     constructor(private flightservice:FlightsService) {}

  @Get()
  findAll():Promise<Flights[]> {
    return this.flightservice.findAll();
  }

  @Get('/:id')
  findOne(@Param() param):Promise<Flights> {
    return this.flightservice.findOne(param.id);
  }
}
