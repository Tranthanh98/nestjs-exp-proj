import { Module } from '@nestjs/common';
import { AccountController } from './AccountController';
import { CqrsModule } from '@nestjs/cqrs';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AccountController],
  providers: [...QueryHandlers],
})
export class AccountModule {}
