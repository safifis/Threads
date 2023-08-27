"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserValidation } from "@/lib/validations/user";

interface Props {
    user: {
      id: string;
      objectId: string;
      username: string;
      name: string;
      bio: string;
      image: string;
    };
    btnTitle: string;
  }

const AccountProfile = ({ user, btnTitle }: Props) => {
    const form = useForm<z.infer<typeof UserValidation>>({
      resolver: zodResolver(UserValidation),
      defaultValues: {
        profile_photo: "",
        name: "",
        username: "",
        bio: "",
      },
    });
  
    const onSubmit = async (values: z.infer<typeof UserValidation>) => {
        // Do Something
    };
  
    return (
      <Form {...form}>
        <form
          className='flex flex-col justify-start gap-10'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-3'>
                <FormLabel className='text-base-semibold text-light-2'>
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  };
  
  export default AccountProfile;