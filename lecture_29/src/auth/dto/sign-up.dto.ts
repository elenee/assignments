import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class signUpDto {
  @ApiProperty({
    example: 'name surname',
  })
  @IsNotEmpty()
  @IsString()
  @Length(5, 10)
  fullName: string;

  @ApiProperty({
    example: 'example@gmail.com',
  })
  @IsNotEmpty()
  @IsString()
  email: string;

  @ApiProperty({
    example: 'password123',
    minimum: 6,
    maximum: 50
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 50)
  password: string;
}
