import { IsNotEmpty, IsNumber, IsString, Length, Max } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 50)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Max(3000)
  price: number;

  @IsNotEmpty()
  @IsNumber()
  @Max(1000)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  category: string;
}
