import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
import { Role } from './enum/user.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
 
  @Prop({ required: true, unique: true })
  email: string;
  
  @Prop({ required: true })
  password: string;

  @Prop({enum: Role})
  role: Role;
  
}

export const UserSchema = SchemaFactory.createForClass(User);
