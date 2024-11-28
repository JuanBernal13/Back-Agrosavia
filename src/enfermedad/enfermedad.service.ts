import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Enfermedad } from './enfermedad.entity';
@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(Enfermedad)
    private enfermedadRepository: Repository<Enfermedad>,
  ) {}

  async create(data: Partial<Enfermedad>): Promise<Enfermedad> {
    const enfermedad = this.enfermedadRepository.create(data);
    return this.enfermedadRepository.save(enfermedad);
  }

  async findAll(): Promise<Enfermedad[]> {
    return this.enfermedadRepository.find();
  }

  async findOne(id: number): Promise<Enfermedad> {
    return this.enfermedadRepository.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Enfermedad>): Promise<Enfermedad> {
    await this.enfermedadRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.enfermedadRepository.delete(id);
  }
}
