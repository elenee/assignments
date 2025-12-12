import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema()
export class Product {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number })
  quantity: number;

  @Prop({ type: String })
  category: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: mongoose.Schema.Types.ObjectId;
}

export const productSchema = SchemaFactory.createForClass(Product);
