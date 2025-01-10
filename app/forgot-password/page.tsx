'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from "@/schemas/login/schema"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton"
import Logo from "@/components/svgs/Logo"
import Link from "next/link"
import { BiPodcast } from "react-icons/bi"
import { forgotPasswordSchema } from "@/schemas/forgot-password/schema"


interface FormDataType {
  email: string
}

export default function ForgotPassword() {
  const form = useForm({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    }
  })

  const onSubmit = (formData: FormDataType) => {
    console.log(formData)
  }

  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-normal items-center md:items-start h-screen overflow-hidden relative">
      <div className="hidden md:grid md:w-1/2 login-bg h-screen place-items-center relative">
        <div className="w-[90%] grid place-items-center space-y-1 px-10 text-white text-center">
          <BiPodcast className='text-4xl' />
          <h2 className="text-4xl font-bold ">Forgot Your Password? Let’s Get You Back In!</h2>
          <p className="text-lg">Don’t worry, it happens to the best of us. Resetting your password is quick and easy.</p>
        </div>

        <div className="absolute top-5 left-10">
          <Logo width={120} height={120} />
        </div>
      </div>

      <div className="w-full px-5 md:w-1/2 h-full grid place-items-center md:px-10 z-20 relative">
        <div className="w-full xl:w-2/3 mx-auto px-4 py-8 border border-px border-solid border-neutral-200 rounded-2xl space-y-10 md:space-y-4 bg-white shadow-xl shadow-black/30">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <h2 className="w-full text-center text-3xl font-semibold">Reset Password</h2>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your e-mail" className="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button type="submit" className='w-full text-center py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-white relative overflow-hidden group/card-btn'>
                <h2 className={cn("z-10")}>{"Reset your password"}</h2>

                {/* before container on hover */}
                <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover/card-btn:h-full transition-all duration-300 z-0" />
              </button>
            </form>
          </Form>
          <div className="space-y-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="px-2 bg-white">Or</span>
              </div>
            </div>

            <EpisodeButton link='/signup' content="Signup" className="w-full bg-black hover:opacity-70" />
          </div>
          <div className="grid place-items-center">
            <p className="w-2/3 text-center text-sm">
              By clicking continue, you agree to our <span className="underline cursor-pointer"> Terms of Service</span> and <span className="underline cursor-pointer">
                Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full z-0 bg-black/10">
        <img src="/assets/hero-sections-bg/login-1.jpg" className="object-cover" alt="" />
      </div>
      {/* overlay */}
      <div className="md:hidden absolute top-0 left-0 w-full h-full z-10 bg-black/40" />
    </section>
  )
}