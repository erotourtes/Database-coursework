import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class UpdateAccessDto {
  @Type(() => Date)
  @IsDate()
  time: Date;
}
