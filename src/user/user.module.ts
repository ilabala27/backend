import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/Models/schema/User.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module(
    {imports: [MongooseModule.forFeature([{name:'form', schema: UserSchema}])],
providers: [UserService],
controllers: [UserController]
})
export class UserModule {}
