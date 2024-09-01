import React from "react";
import { useForm } from "react-hook-form";

function ContactUs() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="bg-white p-6">
      <div className="w-2/3 m-auto flex flex-row justify-between gap-10">
        <div className="text-center flex gap-10 flex-col w-1/2">
          <h1 className="font-sans font-bold text-5xl text-center">
            Lets Talk further Contact us
          </h1>
          <p className="text-md">
            qwertyuioasdfghjk qwertyuiopasdfghjk qwertyuiopsdfghjkl
            qwertyuiopxcvghjkl xvbnm,.sdfghjk sdfghjertyuio xcvbnm,df
            ertyuiyuiocvb fjk iybn jhg 8b m b v y k,ybo8 g8 t8 hiuh oiu 9 y9u
            y9uh 9u h9ou jouhjjhjon
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}

            <input
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p role="alert">{errors.mail?.message}</p>}

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
