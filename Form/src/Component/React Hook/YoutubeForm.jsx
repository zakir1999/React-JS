import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"; // Ensure it's correctly installed

let rendercount = 0;

type formval = {
  username: string;  // ✅ Ensure this matches the `register()` name
  email: string;
  channel: string;
};

export default function YoutubeForm() {
  const form = useForm<formval>({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
    },
  });

  const { register, control, handleSubmit } = form;

  const onSubmit = (data:formval) => {
    console.log("Form Submitted", data);
  };

  rendercount++;

  return (
    <div>
      <h1>Youtube Form {Math.floor(rendercount / 2)}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} /> {/* ✅ Correct field name */}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button type="submit">Submit</button>
      </form>

      <DevTool control={control} /> {/* ✅ Ensure DevTool is correctly used */}
    </div>
  );
}
