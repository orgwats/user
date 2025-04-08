import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmOptions } from './configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmOptions)],
})
export class AppModule {}
