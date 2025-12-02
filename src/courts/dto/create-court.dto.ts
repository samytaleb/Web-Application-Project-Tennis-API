import { IsString, IsNumber, IsOptional, IsBoolean, IsUrl } from 'class-validator';

export class CreateCourtDto {
  @IsString() id: string;
  @IsString() name: string;
  @IsString() city: string;

  @IsOptional() @IsUrl() imageUrl?: string;
  @IsOptional() @IsString() surface?: string;
  @IsOptional() @IsBoolean() indoor?: boolean;

  @IsNumber() latitude: number;
  @IsNumber() longitude: number;

  @IsString() summary: string;

  @IsOptional() details?: Record<string, any>;
  @IsOptional() @IsBoolean() favorite?: boolean;
}