import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn']
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true // if the request contain additional key, it is ignored
    })
  )
  await app.listen(3000);
}
bootstrap();
