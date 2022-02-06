import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Flights{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    origin:string;

    @Column()
    destination:string;

    @Column()
    flightNumber:number;

    @Column()
    depart:Date;

    @Column()
    arrive:Date;

    @Column()
    nonstop:string;
}