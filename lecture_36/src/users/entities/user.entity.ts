import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String })
  fullName: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Number })
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
