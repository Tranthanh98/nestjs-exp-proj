import { ExecutionContext } from '@nestjs/common';

export function BindRequestToClassProperty<
  // eslint-disable-next-line @typescript-eslint/ban-types
  T extends new (...args: any[]) => {},
>(Target: T) {
  return class extends Target {
    request: any;
    constructor(...args: any[]) {
      super(...args);
      const ctx = args.find((arg) => arg as ExecutionContext);
      if (ctx) {
        this.request = ctx.switchToHttp().getRequest();
      }
    }
  };
}
