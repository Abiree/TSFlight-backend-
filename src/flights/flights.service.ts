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

    async create(flight:Flights){
        return this.flightsRepository.insert(flight);
    }

    async update(id: number, updateflight: Flights) {

        return this.flightsRepository.update({id}, {...updateflight});
        
      }
 
    async remove(id:number){
        return this.flightsRepository.delete(id);
    }
   

   

}
