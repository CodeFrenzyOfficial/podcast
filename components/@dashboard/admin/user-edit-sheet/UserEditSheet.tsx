"use client";

import React, { useEffect, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { FaSpinner } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/users";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EditFormType {
  f_name: string;
  l_name: string;
  email: string;
  phone: string;
  role: string;
  blogs: boolean;
  podcasts: boolean;
}

export default function UserEditSheet({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) {
  const router = useRouter();
  const { fetch_users, update_user, loading } = useUserStore();

  const form = useForm<EditFormType>({
    defaultValues: {
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      role: "",
      blogs: false,
      podcasts: false,
    },
  });

  const onSubmit = async (formData: EditFormType) => {
    await update_user(formData, user?.uid, router);
    fetch_users();
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      
      form.setValue("f_name", user?.f_name);
      form.setValue("l_name", user?.l_name);
      form.setValue("email", user?.email);
      form.setValue("phone", user?.phone);
      form.setValue("role", user?.role);
      form.setValue("blogs", user?.blogs);
      form.setValue("podcasts", user?.podcasts);
    }
  }, [user])

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full h-full space-y-10">
          <SheetTitle>Edit User</SheetTitle>
          {/* Inputs */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-3"
            >
              <FormField
                control={form.control}
                name="f_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="l_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <PhoneInput placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="outline-none ring-0">
                          <SelectValue placeholder="Select one option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="outline-none ring-0">
                        <SelectItem value="dj">DJ</SelectItem>
                        <SelectItem value="prmoter/host">
                          Promoter/Host
                        </SelectItem>
                        <SelectItem value="service worker">
                          Service Worker
                        </SelectItem>
                        <SelectItem value="venue owner">Venue Owner</SelectItem>
                        <SelectItem value="regular patron">
                          Regular Patron (Party Goer)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="blogs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blogs</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="outline-none ring-0">
                          <SelectValue placeholder="Select one option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="outline-none ring-0">
                        <SelectItem value={true}>Allowed</SelectItem>
                        <SelectItem value={false}>Not Allowed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="podcasts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Podcasts</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="outline-none ring-0">
                          <SelectValue placeholder="Select one option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="outline-none ring-0">
                        <SelectItem value={true}>Allowed</SelectItem>
                        <SelectItem value={false}>Not Allowed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />



              <Button disabled={loading}>{loading ? <FaSpinner /> : 'Save'}</Button>
            </form>
          </Form>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
