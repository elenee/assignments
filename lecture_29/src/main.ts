import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('docs')
    .setDescription('API description')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const documenFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, documenFactory)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
