import { Module } from '@nestjs/common';
import { PasswordService } from './password.service';
import { PasswordController } from './password.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PasswordSchema } from './password.schema';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'password', schema: PasswordSchema }]),
  MailerModule.forRoot({
    transport:{
      host:'0.0.0.0',
      port:1025
    },
    defaults:{
      from:'balaeditz61@gmail.com'
    }
  })
],
  providers: [PasswordService],
  controllers: [PasswordController]
})
export class PasswordModule {}
