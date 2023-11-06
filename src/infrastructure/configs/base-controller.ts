import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { BaseCommandQuery } from '../common/base-command-query';
import { Controller, ExecutionContext } from '@nestjs/common';
import { BindRequestToClassProperty } from '../common/decorator-factory';

@Controller()
@BindRequestToClassProperty
export class BaseController {
  constructor(
    protected context: ExecutionContext,
    protected queryBus: QueryBus,
    protected commandBus: CommandBus,
  ) {}

  protected async handleQuery<T extends BaseCommandQuery>(
    query: T,
  ): Promise<any> {
    query.userId = this.request.userId;
    return await this.queryBus.execute(query);
  }
}
