import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Registro } from 'src/registro/registro.entity';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  correo: string;

  @OneToMany(() => Registro, (registro) => registro.persona)
  registros: Registro[];
}
