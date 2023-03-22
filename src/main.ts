import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3005;
  app.enableCors({ origin: ['http://localhost:45081/#/'], credentials: true });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  try {
    await app.listen(PORT, () =>
    console.log (`Running Wallet app API on Port ${PORT}`),);
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
