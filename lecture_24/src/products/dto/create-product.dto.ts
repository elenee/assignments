import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  title: string;

  @IsString()
  @MaxLength(50)
  description: string;
  
  @IsNumber()
  @Min(0)
  @Max(3000)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  category: string;
}
