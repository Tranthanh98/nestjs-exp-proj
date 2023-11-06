import { BaseCommandQuery } from 'src/infrastructure/common/base-command-query';

export class GetAccount extends BaseCommandQuery {
  constructor(
    public readonly name: string,
    public readonly phone: string,
  ) {
    super();
  }
}
