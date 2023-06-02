import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExistingUserDTO } from './dto/existinguser.dto';
import { UserDetails } from './user.interface';
import { UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user')
        private readonly userModel: Model<UserDocument>,
      ) {}

      _getUserDetails(user: UserDocument): UserDetails {
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          
      
                };
      }
    
      async findByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).exec();
      }
    
      async findById(id: string): Promise<UserDetails | null> {
        const user = await this.userModel.findById(id).exec();
        if (!user) return null;
        return this._getUserDetails(user);
      }
    
      async create(
        name: string,
        email: string,
        hashedPassword: string,
      ): Promise<UserDocument> {
        const newUser = new this.userModel({
          name,
          email,
            password: hashedPassword,
        });
        return newUser.save();
      }
 
     async getAll(): Promise<UserDetails[]>{
      return await this.userModel.find();
     }

     async update( id: string,updatedto:ExistingUserDTO): Promise<UserDetails>{
      return await this.userModel.findByIdAndUpdate(id, updatedto, {new: true});
     }
      async delete(id: string): Promise<UserDetails> {
        return await this.userModel.findByIdAndRemove(id);
    }
   
    
}
