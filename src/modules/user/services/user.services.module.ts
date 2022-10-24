import { Module } from '@nestjs/common';
import { GetUserService } from './get-user/get-user.service';

@Module({
  providers: [GetUserService]
})
export class UserServicesModule {}
