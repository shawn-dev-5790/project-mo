import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EventModule } from 'src/_core_/events/event.module'
import { SiteModule } from 'src/sites/site.module'
import { MemberModule } from 'src/members/member.module'

const rootOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
}

@Module({
  imports: [TypeOrmModule.forRoot(rootOptions), MemberModule, EventModule, SiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
