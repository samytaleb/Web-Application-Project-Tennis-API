// src/tennis/tennis.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TennisController } from './tennis.controller';
import { TennisService } from './tennis.service';

@Module({
  imports: [HttpModule],
  controllers: [TennisController],
  providers: [TennisService],
})
export class TennisModule {}   // ⬅️ bien "export class TennisModule"
