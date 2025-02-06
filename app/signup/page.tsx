"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/schemas/signup/schema";
import { useRouter } from "next/navigation"; 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import EpisodeButton from "@/components/buttons/social-icons/episode-cards-button/EpisodeButton";
import Logo from "@/components/svgs/Logo";
import Link from "next/link";
// import { BiPodcast } from "react-icons/bi"
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAuthStore from "@/store/store";
import { FaSpinner } from "react-icons/fa6";

interface FormDataType {
  f_name: string;
  l_name: string;
  email: string;
  phone?: string | undefined;
  role: string;
  password: string;
  passwordConfirmation: string;
}

export const Signup = () => {
  const router = useRouter();
  const { register, loading } = useAuthStore();

  const form = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      f_name: "",
      l_name: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (formData: FormDataType) => {
    register(formData, router)
  };

  return (
    <section className="grid overflow-hidden relative place-items-center signup-bg px-5 py-10 md:px-10">
      <div className="max-w-screen-sm mx-auto px-4 py-8 border border-px border-solid border-neutral-200 rounded-2xl space-y-10 md:space-y-4 bg-white shadow-xl shadow-black/30">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <h2 className="w-full text-center text-3xl font-semibold">
              Signup to
              <span className="text-blue-500"> Go</span>
              <span className="text-yellow-400">Win</span>
              <span className="text-blue-500">Out</span>
            </h2>
            {/* First name */}
            <FormField
              control={form.control}
              name="f_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your first name"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="l_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Last name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your last name"
                      className=""
                      {...field}
                    />
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
                <FormItem>
                  <FormLabel>Your e-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Your e-mail" className="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Number</FormLabel>
                  <FormControl>
                    <PhoneInput placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role Select */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select your role</FormLabel>
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

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm your password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="confirm your password"
                      className=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Link href={"/forgot-password"} className="underline text-sm">
                Forgot Password ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-center py-2 px-8 flex justify-center items-center gap-2 rounded-full bg-blue-700 text-white relative overflow-hidden group/card-btn"
            >
              <h2 className={cn("z-10")}>{ !loading ? "Signup" : <FaSpinner className="animate-spin"/>}</h2>

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

          <EpisodeButton
            link="/login"
            content="Login"
            className="w-full bg-black hover:opacity-70"
          />
        </div>
        <div className="grid place-items-center">
          <p className="w-2/3 text-center text-sm">
            By clicking continue, you agree to our{" "}
            <span className="underline cursor-pointer"> Terms of Service</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-5 left-10">
        <Logo width={120} height={120} />
      </div>
    </section>
  );
}


export default Signup;