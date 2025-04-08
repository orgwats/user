import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: '1234',
  database: 'orgwats',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
