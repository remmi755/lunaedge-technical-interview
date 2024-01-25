import * as React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "./Button/Button";
import Input from "./Input/Input";
import IconStar from "./Icons/IconStar";
import { FormValues } from "../types/types";

const UserForm = ({ showTeam }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    if (isValid) {
      showTeam();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Input
          register={register}
          name="name"
          errors={errors}
          type="text"
          label="Name"
          iconStart={<IconStar />}
          styling="default"
          placeholder="Enter your Name "
        />

        <Input
          register={register}
          name="lastname"
          errors={errors}
          type="text"
          label="Last Name"
          iconStart={<IconStar />}
          styling="default"
          placeholder="Enter your Last Name "
        />
      </div>
      <div className="mt-4">
        <Button type="submit" text="Send" variant="primary" size="base" />
      </div>
    </form>
  );
};

export default UserForm;
