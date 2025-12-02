import { IsBoolean } from 'class-validator';
export class UpdateFavoriteDto { @IsBoolean() favorite: boolean; }