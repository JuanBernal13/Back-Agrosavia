import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';
@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}

  async create(data: Partial<Persona>): Promise<Persona> {
    const persona = this.personaRepository.create(data);
    return this.personaRepository.save(persona);
  }

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }

  async findOne(id: number): Promise<Persona> {
    return this.personaRepository.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Persona>): Promise<Persona> {
    await this.personaRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.personaRepository.delete(id);
  }
}
