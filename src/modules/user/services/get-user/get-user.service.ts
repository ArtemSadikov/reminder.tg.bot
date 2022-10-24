import { Injectable } from '@nestjs/common';
import { GetUserPort } from '../../ports/user/out/get-user.port.interface';

@Injectable()
export class GetUserService implements GetUserPort {}
