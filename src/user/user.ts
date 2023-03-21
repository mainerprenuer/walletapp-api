import { User } from "src/utils/typeorm";
import { CreateUserParams, FindUserParams } from "src/utils/types/queries";

export interface IUserService {
    findUser(params: FindUserParams): Promise<User | undefined>;
    createUser(params: CreateUserParams): Promise<User>;
}