import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @TypedRoute.Post()
  create(@TypedBody() createUserDto: Prisma.UserCreateInput): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @TypedRoute.Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // TODO: add better error handling for not found instead of returning null
  @TypedRoute.Get(':id')
  findOne(@TypedParam('id') id: string): Promise<User | null> {
    return this.userService.findOne(+id);
  }

  @TypedRoute.Patch(':id')
  update(
    @TypedParam('id') id: string,
    @TypedBody() updateUserDto: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.update(+id, updateUserDto);
  }

  @TypedRoute.Delete(':id')
  remove(@TypedParam('id') id: string): Promise<User> {
    return this.userService.remove(+id);
  }
}
