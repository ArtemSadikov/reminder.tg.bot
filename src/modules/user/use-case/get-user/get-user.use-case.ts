import { GetUserUseCasePort } from '../../ports/user/in/use-case/get-use.use-case.port.interface';

export const GetUserUseCaseSymbol = Symbol.for('GetUserUseCase');

export class GetUserUseCase implements GetUserUseCasePort {}
