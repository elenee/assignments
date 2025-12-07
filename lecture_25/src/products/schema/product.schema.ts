import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const productSchema = SchemaFactory.createForClass(Product);
