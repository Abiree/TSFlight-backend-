import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

  @Get('/query/:org/:dest')
  query(@Param('org') org,@Param('dest') dest):Promise<Flights>{
    return this.flightservice.query(org,dest)
  }

  @Post()
  create(@Body() flight:Flights):Promise<Flights[]> {
    return this.flightservice.create(flight);
  }

 

  @Patch(':id')
  update(@Param()param , @Body() flight: Flights):Promise<any> {
    return this.flightservice.update(param.id, flight);
  }

  @Delete(':id')
  remove(@Param() param):Promise<any> {
    return this.flightservice.remove(param.id);
  }
  
}
