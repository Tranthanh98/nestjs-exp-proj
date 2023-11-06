import { Controller, ExecutionContext, Get, Query } from '@nestjs/common';
import { GetAccount } from './queries/GetAccount';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { BaseController } from 'src/infrastructure/configs/base-controller';

@Controller('account')
export class AccountController extends BaseController {
  constructor(
    protected context: ExecutionContext,
    protected queryBus: QueryBus,
    protected commandBus: CommandBus,
  ) {
    super(context, queryBus, commandBus);
  }

  @Get()
  async getAccount(@Query() name: string, @Query() phone: string) {
    const accountQuery = new GetAccount(name, phone);

    return await this.queryBus.execute(accountQuery);
  }
}
