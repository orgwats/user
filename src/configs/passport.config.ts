import { IAuthModuleOptions } from '@nestjs/passport';

export const passportOptions: IAuthModuleOptions = {
  defaultStrategy: 'jwt',
};
