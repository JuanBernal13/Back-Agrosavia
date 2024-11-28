import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Enfermedad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fiebre: boolean;

  @Column()
  tos: boolean;

  @Column()
  fatiga: boolean;

  @Column()
  dolorGarganta: boolean;

  @Column()
  perdidaOlfato: boolean;

  @Column()
  dificultadRespirar: boolean;
}
