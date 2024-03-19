import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Nest App API')
    .setDescription('Nest App API description')
    .setVersion('0.1')
    .addTag('API')
    .build()

  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      defaultModelExpandDepth: 2,
      defaultModelsExpandDepth: 2,
    },
  })
}
