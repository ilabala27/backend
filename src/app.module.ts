import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { async } from 'rxjs';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/loan'),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
