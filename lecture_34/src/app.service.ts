import { Injectable } from '@nestjs/common';
import { AwsService } from './aws/aws.service';

@Injectable()
export class AppService {
  constructor(private AwsService: AwsService){}
  getHello(): string {
    return 'Hello World!';
  }

  uploadImage(filePath, file){
    return this.AwsService.uploadImage(filePath, file)
  }

  getFile(fileId){
    return this.AwsService.getImageById(fileId)
  }
}
