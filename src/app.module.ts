import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AccountModule } from './features/account/account.module';

@Module({
  imports: [AccountModule],
  controllers: [AppController],
})
export class AppModule {}
