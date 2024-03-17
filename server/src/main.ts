import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.development.local' })

import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app/app.module'

async function bootstrap() {
  // load env

  // create nest app
  const app = await NestFactory.create(AppModule)

  // create document config
  const documentConfig = new DocumentBuilder()
    .setTitle('Nest App API')
    .setDescription('Nest App API description')
    .setVersion('0.1')
    .addTag('API')
    .build()

  // create document
  const document = SwaggerModule.createDocument(app, documentConfig)

  // setup - document
  SwaggerModule.setup('docs', app, document)

  // setup - middlewares
  app.enableCors()

  // server - start
  await app.listen(3000)
}

// execute
bootstrap()
