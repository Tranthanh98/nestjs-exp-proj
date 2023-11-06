import { Controller, Get, Ip } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health-check')
  healthCheck(@Ip() ip): string {
    return ip;
  }
}
