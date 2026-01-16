import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'post title',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 30)
  title: string;

  @ApiProperty({
    example: 'content 1',
  })
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  content: string;
}
