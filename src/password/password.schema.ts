import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type PasswordDocument = Password & Document;

@Schema()
export class Password {
  @Prop({ required: true })
  id: string;
 
  @Prop({ required: true, unique: true })
  email: string;
  
  @Prop({ required: true })
  token: string;
  
}

export const PasswordSchema = SchemaFactory.createForClass(Password);
