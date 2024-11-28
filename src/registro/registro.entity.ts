import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Persona } from '../persona/persona.entity';

@Entity()
export class Registro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  hora: string;

  @ManyToOne(() => Persona, (persona) => persona.registros)
  persona: Persona;
}
