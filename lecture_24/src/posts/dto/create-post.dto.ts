import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 18)
  title: string;
  
  @IsNotEmpty()
  @IsString()
  @Length(2, 18)
  content: string;
}
