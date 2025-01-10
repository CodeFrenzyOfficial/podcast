'use client'

import { cn } from "@/lib/utils";
import { contactSchema } from "@/schemas/contact/schema";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormType {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  message: string;
}

export default function ContactForm() {

  const form = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: ""
    }
  })

  const onSubmit = (formData: ContactFormType) => {
    console.log(formData)
  }
  return (
    <div className="space-y-5 px-10 py-10">
      <h2 className="text-3xl font-semibold">Contact Us</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="w-full flex justify-between  items-center gap-5">            {/* First name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">

                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Your e-mail" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex justify-between  items-center gap-5">

            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">

                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <PhoneInput placeholder='+1 (555) 123-4567' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* Subject */}
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">

                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Your subject" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea rows={8} cols={8} placeholder="Tell us a little bit about yourself" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button type="submit" className='w-full text-center py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-white relative overflow-hidden group/card-btn'>
            <h2 className={cn("z-10")}>{"Submit"}</h2>

            {/* before container on hover */}
            <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover/card-btn:h-full transition-all duration-300 z-0" />
          </button>
        </form>
      </Form>
    </div>
  )
}
