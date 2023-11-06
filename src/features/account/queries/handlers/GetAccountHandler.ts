import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAccount } from '../GetAccount';
import { AccountViewModel } from '../../responses/AccountViewModel';

@QueryHandler(GetAccount)
export class GetAccountHandler
  implements IQueryHandler<GetAccount, AccountViewModel>
{
  async execute(query: GetAccount) {
    const { userId, name, phone } = query;

    return new AccountViewModel(userId, name, phone);
  }
}
