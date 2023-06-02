
import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Post } from '@nestjs/common';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {

    constructor(private readonly passwordservice: PasswordService,
        private mailerservice: MailerService){}

    @Post('forgot')
    async forgot(@Body('email')email: string){
        const token= Math.random().toString(20).substring(2,12);
        await this.passwordservice.create({
            email,token
        });

        const url= `http://localhost:4444/reset/${token}`;

        await this.mailerservice.sendMail({
            to: email,
            subject:'reset yor password',
            html: `Click <a href="${url}"> here </a> to reset your password!`
        });
        return{
            message: 'Please check yourt email!'
        }
        
    }
}
