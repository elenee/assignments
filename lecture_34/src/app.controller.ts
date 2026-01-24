import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import SharpMulter from 'sharp-multer';
import { memoryStorage } from 'multer';
import sharp from 'sharp';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', { storage: memoryStorage() }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const resizedBuffer = await sharp(file.buffer).resize(800, 600).toBuffer();
    const path = Math.random().toString().slice(2);
    const filePath = `images/${path}`;
    console.log(filePath);
    return this.appService.uploadImage(filePath, resizedBuffer);
  }

  @Post('/getImage')
  getImage(@Body('fileId') fileId) {
    return this.appService.getFile(fileId);
  }
}
