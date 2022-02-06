import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Post()
  create(@Body() flight:Flights) {
    return this.flightservice.create(flight);
  }

 

  @Put(':id')
  update(@Param()param , @Body() flight: Flights) {
    return this.flightservice.update(param.id, flight);
  }

  @Delete(':id')
  remove(@Param() param) {
    return this.flightservice.remove(param.id);
  }
  
}
