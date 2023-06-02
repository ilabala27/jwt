import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

import { Role } from "../enum/user.enum";

export class NewUserDTO {

  @IsString()
  @IsNotEmpty()
  name: string; 
     
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;
  
 
  }
  