"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section
      id="contact"
      className="text-foreground font-mono flex flex-col gap-4 mb-30"
    >
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="yolo 1"
          defaultValue="test"
          {...register("example")}
        />

        <input
          placeholder="yolo 2"
          {...register("exampleRequired", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </section>
  );
}
