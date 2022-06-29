import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { User } from '@app/common/generated/index/user/user.model';
import { UsersService } from './users.service';
import { FindManyUserArgs } from '@app/common/generated/index/user/find-many-user.args';
import console from 'console';
import { FindUniqueUserArgs } from '@app/common/generated/index/user/find-unique-user.args';
import { UpdateOneUserArgs } from '@app/common/generated/index/user/update-one-user.args';
import { DeleteOneUserArgs } from '@app/common/generated/index/user/delete-one-user.args';
import { AccountStatus } from '@prisma/client';
import { UserEntity } from '@app/common/decorators/user.decorator';
import { Counselor } from '@app/common/generated/index/counselor/counselor.model';
import { FindManyCounselorArgs } from '@app/common/generated/index/counselor/find-many-counselor.args';
import { FindUniqueCounselorArgs } from '@app/common/generated/index/counselor/find-unique-counselor.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => [User])
  async findAllUsers(@Args() userFindManyArgs: FindManyUserArgs, @Info() info) {
    try {
      const users = new PrismaSelect(info).value;
      return this.usersService.findAll({ ...userFindManyArgs, ...users });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => [Counselor])
  async findAllCounselors(
    @Args() counselorFindManyArgs: FindManyCounselorArgs,
    @Info() info,
  ) {
    try {
      const counselors = new PrismaSelect(info).value;
      return this.usersService.getCounselors({
        ...counselorFindManyArgs,
        ...counselors,
      });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => Counselor)
  async getOneCounselor( @Args('id') id: string, @Info() info ) {
    try {
      const counselors = new PrismaSelect(info).value;
      return this.usersService.getOneCounselor({ where: { id: id }, ...counselors });
    } catch (error) {
      console.error(error);
    }
  }

  @Query(() => User)
  async me(@UserEntity() user: User, @Info() info) {
    const select = new PrismaSelect(info).value;
    return await this.usersService.getMe(user.id, select);
  }

  @Mutation(() => User)
  async findOneUser(@Args() userFindUnique: FindUniqueUserArgs, @Info() info) {
    try {
      const user = new PrismaSelect(info).value;
      return this.usersService.findOne({ ...userFindUnique, ...user });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => User)
  async approveUser(@Args('id') id: string, @Info() info) {
    try {
      const select = new PrismaSelect(info).value;
      const result = await this.usersService.updateUser({
        where: { id: id },
        data: { accountStatus: AccountStatus.APPROVED },
        ...select,
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => User)
  async rejectUser(@Args('id') id: string, @Info() info) {
    try {
      const select = new PrismaSelect(info).value;
      const result = await this.usersService.updateUser({
        where: { id: id },
        data: { accountStatus: AccountStatus.REJECTED },
        ...select,
      });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Mutation(() => User)
  async updateUser(@Args() userUpdateArgs: UpdateOneUserArgs, @Info() info) {
    try {
      const update = new PrismaSelect(info).value;
      return this.usersService.updateUser({ ...userUpdateArgs, ...update });
    } catch (error) {
      console.error(error);
    }
  }

  @Mutation(() => User)
  async deleteUser(@Args() userDeletArgs: DeleteOneUserArgs, @Info() info) {
    try {
      const deleteUser = new PrismaSelect(info).value;
      return this.usersService.updateUser({ ...userDeletArgs, ...deleteUser });
    } catch (error) {
      console.error(error);
    }
  }
}
