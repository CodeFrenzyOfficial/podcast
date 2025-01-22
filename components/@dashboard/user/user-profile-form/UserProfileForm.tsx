'use client'

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { userProfileSchema } from "@/schemas/dashboard/user/profile/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";

interface FormDataType {
    f_name: string,
    l_name: string,
    phone?: string | undefined
}

export default function UserProfileForm() {
    const form = useForm({
        resolver: yupResolver(userProfileSchema),
        defaultValues: {
            f_name: "",
            l_name: "",
            phone: ""
        }
    })

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
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
