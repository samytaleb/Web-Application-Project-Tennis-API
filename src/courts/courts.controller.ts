import { Controller, Get, Param, Put, Body, Post, Query } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { CreateCourtDto } from './dto/create-court.dto';

@Controller('courts')
export class CourtsController {
  constructor(private readonly svc: CourtsService) {}

  @Get()
  list(@Query('q') q?: string) {
    return q ? this.svc.search(q) : this.svc.listSummary();
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return this.svc.findOne(id);
  }

  @Put(':id')
  favorite(@Param('id') id: string, @Body() dto: UpdateFavoriteDto) {
    return this.svc.updateFavorite(id, dto.favorite);
  }

  @Post()
  create(@Body() dto: CreateCourtDto) {
    return this.svc.create(dto);
  }
}