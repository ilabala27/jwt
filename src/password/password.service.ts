import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PasswordDocument } from './password.schema';

@Injectable()
export class PasswordService {
    constructor(
        @InjectModel('password')
        private readonly passwordModel: Model<PasswordDocument>,
      ) {}

      async create(body: any){
        const newUser = new this.passwordModel(body);
          return newUser.save();
      }

}
