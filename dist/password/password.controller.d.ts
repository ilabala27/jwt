import { MailerService } from '@nestjs-modules/mailer';
import { PasswordService } from './password.service';
export declare class PasswordController {
    private readonly passwordservice;
    private mailerservice;
    constructor(passwordservice: PasswordService, mailerservice: MailerService);
    forgot(email: string): Promise<{
        message: string;
    }>;
}
