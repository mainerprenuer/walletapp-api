import { Controller } from "@nestjs/common";
import { Routes } from "src/utils/types/constants";

@Controller(Routes.USERS)
export class UserController {}