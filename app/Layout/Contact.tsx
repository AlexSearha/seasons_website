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
  const inputClassName = `bg-amber-100 p-4 rounded h-15 text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground`;
  const labelClassName = `text-xl`;

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <section
      id="contact"
      className="text-foreground font-mono flex flex-col gap-4 mb-30"
    >
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col w-1/2">
            <label className={labelClassName} htmlFor="nom">
              Nom
            </label>
            <input
              id="nom"
              placeholder="Nom"
              type="text"
              className={inputClassName}
              {...(register("example"), { required: true })}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className={labelClassName} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              placeholder="Email"
              type="email"
              className={inputClassName}
              {...register("exampleRequired", { required: true })}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className={labelClassName} htmlFor="sujet">
            Sujet
          </label>
          <input
            id="sujet"
            placeholder="Sujet"
            type="text"
            className={inputClassName}
            {...register("exampleRequired", { required: false })}
          />
        </div>

        <div className="flex flex-col">
          <label className={labelClassName} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            className={`${inputClassName} h-50 text-xl`}
            {...register("exampleRequired", { required: true })}
          />
        </div>

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && (
          <span className="italic text-red-600">Ce champ est requis</span>
        )}

        <Button type="submit" title="Envoyer" icon={faPaperPlane} dark />
      </form>
    </section>
  );
}
