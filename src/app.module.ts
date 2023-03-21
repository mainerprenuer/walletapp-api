// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config/dist';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';
// import { entities } from './utils/typeorm';
// @Module({
//   imports: [
//     ConfigModule.forRoot({ envFilePath: '.env.development'}),
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: process.env.MYSQL_DB_HOST,
//       port: parseInt(process.env.MYSQL_DB_PORT),
//       username: process.env.MYSQL_DB_USERNAME,
//       password: process.env.MYSQL_DB_PASSWORD,
//       database: process.env.MYSQL_DB_NAME,
//       synchronize: true,
//       entities,
//     }),
//     AuthModule,
//     UserModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: '123pass',
      database: 'walletApp',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
