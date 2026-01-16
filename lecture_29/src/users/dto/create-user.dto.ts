import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
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
  })
  @IsNotEmpty()
  @IsString()
  @Length(6, 100)
  password: string;
}
