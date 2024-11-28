import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Persona} from './persona/persona.entity'
import { Enfermedad } from './enfermedad/enfermedad.entity';
import { Registro } from './registro/registro.entity';
import { ResistenciaBacteriana } from './resistencia-bacteriana/resistencia-bacteriana.entity';
import { PersonaModule } from './persona/persona.module';
import { EnfermedadModule } from './enfermedad/enfermedad.module';
import { RegistroModule } from './registro/registro.module';
import { ResistenciaBacterianaModule } from './resistencia-bacteriana/resistencia-bacteriana.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root1',
      password: '1234',
      database: 'triage_db',
      entities: [Persona, Enfermedad, Registro, ResistenciaBacteriana],
      synchronize: true,
    }),
    PersonaModule,
    EnfermedadModule,
    RegistroModule,
    ResistenciaBacterianaModule
  ],
})
export class AppModule {}
