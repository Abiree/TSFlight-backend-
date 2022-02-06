import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flights } from 'src/model/flights.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlightsService {

    constructor(@InjectRepository(Flights)
    private flightsRepository:Repository<Flights>){}

    async findAll():Promise<Flights[]>{
        return this.flightsRepository.find();
    }
    async findOne(id:number):Promise<Flights>{
        return this.flightsRepository.findOne(id);
    }

   

}
