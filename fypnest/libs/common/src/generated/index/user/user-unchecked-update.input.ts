import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumGenderFieldUpdateOperationsInput } from '../prisma/nullable-enum-gender-field-update-operations.input';
import { EnumAccountStatusFieldUpdateOperationsInput } from '../prisma/enum-account-status-field-update-operations.input';
import { EnumRoleFieldUpdateOperationsInput } from '../prisma/enum-role-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AdminUncheckedUpdateOneWithoutUserInput } from '../admin/admin-unchecked-update-one-without-user.input';
import { CounselorUncheckedUpdateOneWithoutUserInput } from '../counselor/counselor-unchecked-update-one-without-user.input';
import { CounselorSessionUncheckedUpdateOneWithoutUserInput } from '../counselor-session/counselor-session-unchecked-update-one-without-user.input';
import { PostUncheckedUpdateManyWithoutAuthorInput } from '../post/post-unchecked-update-many-without-author.input';
import { StaffUncheckedUpdateOneWithoutUserInput } from '../staff/staff-unchecked-update-one-without-user.input';
import { StudentUncheckedUpdateOneWithoutUserInput } from '../student/student-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    password?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mobile?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumGenderFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableEnumGenderFieldUpdateOperationsInput;

    @Field(() => EnumAccountStatusFieldUpdateOperationsInput, {nullable:true})
    accountStatus?: EnumAccountStatusFieldUpdateOperationsInput;

    @Field(() => EnumRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumRoleFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AdminUncheckedUpdateOneWithoutUserInput, {nullable:true})
    admin?: AdminUncheckedUpdateOneWithoutUserInput;

    @Field(() => CounselorUncheckedUpdateOneWithoutUserInput, {nullable:true})
    counselor?: CounselorUncheckedUpdateOneWithoutUserInput;

    @Field(() => CounselorSessionUncheckedUpdateOneWithoutUserInput, {nullable:true})
    counselingSession?: CounselorSessionUncheckedUpdateOneWithoutUserInput;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => StaffUncheckedUpdateOneWithoutUserInput, {nullable:true})
    staff?: StaffUncheckedUpdateOneWithoutUserInput;

    @Field(() => StudentUncheckedUpdateOneWithoutUserInput, {nullable:true})
    student?: StudentUncheckedUpdateOneWithoutUserInput;
}
