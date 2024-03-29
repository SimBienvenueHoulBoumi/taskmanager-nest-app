import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: ['http://localhost:4000'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Taskmanager Documentation')
    .setDescription(
      'Simple api test framework for taskmanager app without security',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(4000);
}

bootstrap();
