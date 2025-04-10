import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtOptions: JwtModuleOptions = {
  secret: 'secret',
  signOptions: {
    expiresIn: 60 * 60,
  },
};
