import { Controller, Get, Post, Body } from '@nestjs/common';
import { ResistenciaBacterianaService } from './resistencia-bacteriana.service';
import { ResistenciaBacteriana } from './resistencia-bacteriana.entity';
@Controller('resistencia-bacteriana')
export class ResistenciaBacterianaController {
  constructor(private readonly resistenciaService: ResistenciaBacterianaService) {}

  @Post()
  create(@Body() data: Partial<ResistenciaBacteriana>) {
    return this.resistenciaService.create(data);
  }

  @Get()
  findAll() {
    return this.resistenciaService.findAll();
  }
}
