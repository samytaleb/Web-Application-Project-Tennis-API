import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TennisModule } from './tennis/tennis.module';
import { CourtsModule } from './courts/courts.module';

@Module({
  imports: [HttpModule, CourtsModule, TennisModule],
})
export class AppModule {}
