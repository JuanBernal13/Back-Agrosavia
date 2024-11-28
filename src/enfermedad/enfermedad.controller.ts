import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EnfermedadService } from './enfermedad.service';
import { Enfermedad } from './enfermedad.entity';
@Controller('enfermedad')
export class EnfermedadController {
  constructor(private readonly enfermedadService: EnfermedadService) {}

  @Post()
  create(@Body() data: Partial<Enfermedad>) {
    return this.enfermedadService.create(data);
  }

  @Get()
  findAll() {
    return this.enfermedadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.enfermedadService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Enfermedad>) {
    return this.enfermedadService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.enfermedadService.delete(id);
  }
}
