import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from 'src/dto/user.dto';
import { user } from 'src/interface/user.interface';

@Injectable()
export class UserService {
    constructor(@InjectModel('form') private readonly UserModel: Model<user>) {}

   
   async listCustomer(): Promise<user []> {
        return await this.UserModel.find().exec();
    }

     async createCustomer(user : userDto): Promise<user> {
        const newCustomer =new this.UserModel(user)
        return newCustomer.save();
    }

     async updateCustomer(id: String, data: userDto): Promise<user> {
        const updatedCustomer = await this.UserModel
        .findByIdAndUpdate(id, data, { new: true });
       return updatedCustomer;

    }
     async getCustomer(id: string): Promise<user> {
        const user = await this.UserModel.findById(id).exec();
        if(!user){
            throw new NotFoundException('customer not found');
        }
        return user;
    }

    async removeCustomer(id: string): Promise<user []> {
        try {
        return await this.UserModel.findByIdAndRemove(id);
        } catch(err){
            throw new InternalServerErrorException(err);
        }
    }
}
