import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsController } from './flights/flights.controller';
import { Flights } from './model/flights.entity';
import { FlightsService } from './flights/flights.service';

@Module({
  imports: [TypeOrmModule.forFeature([Flights]),TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5432,
    username:'postgres',
    password:'rootroot',
    database:'transportation',
    entities:[Flights],
    synchronize:true,
  })],
  controllers: [AppController, FlightsController],
  providers: [AppService, FlightsService],
})
export class AppModule {}
