import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class ServerUserDto {
  @IsNumber()
  id: number;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsEmail()
  @IsOptional()
  mail?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  organizationListId: number;

  @IsNumber()
  roleId: number;

  Role: {
    id: number;
    name: string;
  };

  OrganizationList: {
    id: number;
    name: string;
  };
}
