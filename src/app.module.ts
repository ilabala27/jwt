import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './user/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/userlogin'),ProductModule, UserModule, AuthModule, PasswordModule],
  controllers: [AppController],
  providers: [AppService,
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
  

})
export class AppModule {}
