"use client"

import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SignUpFormSchema, SignUpSchema } from "../validators/SignUp";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function SignUp() {
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(SignUpSchema)
  });

  const [error, setError] = useState("")
  const router = useRouter()

  async function onSubmit(data:SignUpFormSchema) {
    setError("")
    console.log("Sending data:", data);
    try {
      const res = await axios.post("http://localhost:3030/auth/sign-up", data)
      if(res.status === 200) {
        router.push("/sign-in")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-fuchsia-600">
      <form onSubmit={handleSubmit(onSubmit)} className="h-auto w-[400px] shadow-lg bg-emerald-900 rounded-xl flex flex-col gap-4 p-10">
        <input
          type="text"
          placeholder="full name"
          className="border rounded-lg p-2 text-black bg-white"
          {...register("fullname")}
        />
        <p className="text-red-500">{errors.fullname?.message}</p>
        <input
          type="email"
          placeholder="email"
          className="border rounded-lg p-2 text-black bg-white"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email?.message}</p>
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-2 text-black bg-white"
          {...register("password")}
        />
        <p className="text-red-500">{errors.password?.message}</p>
        <button className="rounded-lg bg-amber-950 p-3 text-white text-bold">Submit</button>
        <p className="text-red-500">{error}</p>
        <div>
          <span>Do you have an acount? </span>
          <Link className="text-[blue]" href={"/sign-in"}>Sign in</Link>
        </div>
      </form>
    </div>
  );
}
