"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Components/Button";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

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
          placeholder="Nom"
          type="text"
          {...(register("example"), { required: true })}
        />

        <input
          placeholder="email"
          type="email"
          {...register("exampleRequired", { required: true })}
        />

        <input
          placeholder="Message"
          type="text"
          {...register("exampleRequired", { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="italic text-red-600">Ce champ est requis</span>
        )}

        <Button type="submit" title="Envoyer" icon={faPaperPlane} dark />
      </form>
    </section>
  );
}
