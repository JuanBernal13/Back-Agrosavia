import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ResistenciaBacteriana {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clasificacion: string;

  @Column()
  proteinas: string;
}
