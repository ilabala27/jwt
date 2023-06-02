import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { JwtGuard } from 'src/guard/jwt.guard';
import { JwtStrategy } from 'src/guard/jwt.strategy';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports:[UserModule, JwtModule.registerAsync({
    useFactory: () => ({
      secret: 'secret',
      signOptions: { expiresIn: '3600s' },
    }),
  }),],
  controllers: [AuthController],
  providers: [AuthService,JwtGuard,JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },]
})
export class AuthModule {}
