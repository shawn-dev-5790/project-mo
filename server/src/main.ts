import * as dotenv from 'dotenv'
dotenv.config({ path: '.env.development.local' })

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { setupSwagger } from './_core_/util/enableSwagger'

async function bootstrap() {
  // create nest app
  const app = await NestFactory.create(AppModule)

  // setup - api document
  setupSwagger(app)

  // setup - middlewares
  app.enableCors()

  // server - start
  await app.listen(3000)
}

// execute
bootstrap()
