import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flights } from 'src/model/flights.entity';
import { Repository,UpdateResult } from 'typeorm';

@Injectable()
export class FlightsService {

    constructor(@InjectRepository(Flights)
    private readonly flightsRepository:Repository<Flights>){}

    async findAll():Promise<Flights[]>{
        return this.flightsRepository.find();
    }
    async findOne(id:number):Promise<Flights>{
        return this.flightsRepository.findOne(id);
    }

    async create(flight:Flights):Promise<any> {
        return await this.flightsRepository.save(flight);
    }

    async update(id: number, updateflight: Flights):Promise<UpdateResult>  {

        return await this.flightsRepository.update({id}, {...updateflight});
        
      }
 
    async remove(id:number):Promise<any>{
        return this.flightsRepository.delete(id);
    }

    async query(org:string,dest:string):Promise<any>{
        return await this.flightsRepository.find({origin:org,destination:dest});

    }

    async getOrigin():Promise<String[]>{
        return this.flightsRepository.query("SELECT DISTINCT origin FROM flights");
    }

    async getDest():Promise<String[]>{
        return this.flightsRepository.query("SELECT DISTINCT destination FROM flights");
    }
   

   

}
