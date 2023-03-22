// import { Controller, Post } from "@nestjs/common";
// import { Routes } from "src/utils/constants";

// @Controller(Routes.USERS)
// export class UserController {}

import { Controller, Post } from '@nestjs/common';
import { User } from 'src/utils/typeorm';
import { Connection } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private readonly connection: Connection) {}

  @Post()
  async findAll(): Promise<User[]> {
    const users = await this.connection.query('SELECT * FROM users');
    return users;
  }
}