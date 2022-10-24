import { Module } from '@nestjs/common';
import { GetUserUseCase, GetUserUseCaseSymbol } from './get-user/get-user.use-case';

@Module({
  providers: [
    {
      provide: GetUserUseCaseSymbol,
      inject: [],
      useFactory: () => {
        return new GetUserUseCase();
      }
    }
  ],
  exports: [GetUserUseCaseSymbol],
})
export class UserUseCaseModule {}
