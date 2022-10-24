import { Module } from '@nestjs/common';
import { UserUseCaseModule } from './use-case/user.use-case.module';
import { UserServicesModule } from './services/user.services.module';
import { UserControllersModule } from './controllers/user.controllers.module';

@Module({
  imports: [UserUseCaseModule, UserServicesModule, UserControllersModule]
})
export class UserModule {}
