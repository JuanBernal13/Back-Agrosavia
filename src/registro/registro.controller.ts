import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { Registro } from './registro.entity';
@Controller('registro')
export class RegistroController {
  constructor(private readonly registroService: RegistroService) {}

  @Post()
  create(@Body() data: Partial<Registro>) {
    return this.registroService.create(data);
  }

  @Get()
  findAll() {
    return this.registroService.findAll();
  }
}
