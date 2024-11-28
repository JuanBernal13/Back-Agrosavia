import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResistenciaBacteriana } from './resistencia-bacteriana.entity';
@Injectable()
export class ResistenciaBacterianaService {
  constructor(
    @InjectRepository(ResistenciaBacteriana)
    private resistenciaRepository: Repository<ResistenciaBacteriana>,
  ) {}

  async create(data: Partial<ResistenciaBacteriana>): Promise<ResistenciaBacteriana> {
    const resistencia = this.resistenciaRepository.create(data);
    return this.resistenciaRepository.save(resistencia);
  }

  async findAll(): Promise<ResistenciaBacteriana[]> {
    return this.resistenciaRepository.find();
  }
}
