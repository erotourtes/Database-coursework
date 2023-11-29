import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  login?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsNumber()
  @IsOptional()
  organizationListId?: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
