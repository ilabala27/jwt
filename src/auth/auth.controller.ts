import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Roles } from 'src/user/decorators/roles.decorator';
import { ExistingUserDTO } from 'src/user/dto/existinguser.dto';
import { NewUserDTO } from 'src/user/dto/newuser.dto';
import { Role } from 'src/user/enum/user.enum';
import { UserDetails } from 'src/user/user.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    @Roles(Role.Admin)
    register(@Body() user: NewUserDTO): Promise<UserDetails | null> {
      return this.authService.register(user);
    }
  
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() user: ExistingUserDTO): Promise<{ token: string } | null> {
      return this.authService.login(user);
    }
  
    @Post('verify-jwt')
    @HttpCode(HttpStatus.OK)
    verifyJwt(@Body() payload: { jwt: string }) {
      return this.authService.verifyJwt(payload.jwt);
    }

}
