import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.development.local' })

import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app/app.module'

async function bootstrap() {
  // create nest app
  const app = await NestFactory.create(AppModule)

  // setup - api document
  const documentOptions = new DocumentBuilder()
    .setTitle('Nest App API')
    .setDescription('Nest App API description')
    .setVersion('0.1')
    .addTag('API')
    .build()
  const document = SwaggerModule.createDocument(app, documentOptions)
  const swaggerOptions = { defaultModelExpandDepth: 10, defaultModelsExpandDepth: 10 }

  SwaggerModule.setup('docs', app, document, { swaggerOptions })

  // setup - middlewares
  app.enableCors()

  // server - start
  await app.listen(3000)
}

// execute
bootstrap()
