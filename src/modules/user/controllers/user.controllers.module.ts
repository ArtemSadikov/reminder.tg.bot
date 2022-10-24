import { Module } from '@nestjs/common';
import { GetUserController } from './get-user/get-user.controller';

@Module({
  controllers: [GetUserController]
})
export class UserControllersModule {}
