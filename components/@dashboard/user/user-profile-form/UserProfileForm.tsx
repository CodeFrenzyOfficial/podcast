'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { userProfileSchema } from "@/schemas/dashboard/user/profile/schema";
import useAuthStore from "@/store/store";
import useUserStore from "@/store/users";
import { yupResolver } from "@hookform/resolvers/yup";
import { Edit } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";

// interface FormDataType {
//     f_name: string,
//     l_name: string,
//     phone?: string | undefined
// }

interface FormDataType {
    f_name: string;
    l_name: string;
    email: string;
    phone: string;
    role: string;
    blogs: boolean;
    podcasts: boolean;
}

export default function UserProfileForm() {
    const { user } = useAuthStore();
    const { update_user } = useUserStore();

    const form = useForm<FormDataType>({
        // resolver: yupResolver(FormDataType),
        defaultValues: {
            f_name: "",
            l_name: "",
            email: "",
            phone: "",
            role: "",
            blogs: false,
            podcasts: false,
        }
    })

    const onSubmit = (formData: FormDataType) => {
        update_user(formData, user.uid)
    }

    useEffect(() => {
        form.setValue("f_name", user?.f_name);
        form.setValue("l_name", user?.l_name);
        form.setValue("email", user?.email);
        form.setValue("phone", user?.phone);
        form.setValue("role", user?.role);
        form.setValue("blogs", user?.blogs || false);
        form.setValue("podcasts", user?.podcasts|| false);
    }, [user])
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="f_name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Edit first name" className="bg-transparent border-neutral-400 transition-all hover:border-black" {...field} />
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
                                <Input placeholder="Edit last name" className="bg-transparent border-neutral-400 transition-all hover:border-black" {...field} />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <PhoneInput placeholder="Edit number" className="bg-transparent border border-solid !border-neutral-400 !transition-all hover:!border-black rounded-md" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Update</Button>
            </form>
        </Form>
    )
}
