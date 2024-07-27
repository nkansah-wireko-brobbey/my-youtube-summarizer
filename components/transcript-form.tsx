"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";


import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CornerDownLeft } from "lucide-react";

const formSchema = z.object({
  url: z
    .string()
    .min(2, {
      message: "url must be at least 2 characters.",
    })
    .url({
      message: "url must be a valid URL.",
    }),
});

export function TranscriptForm() {
  // ...
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues:{
        url: "",
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    const url = data.url;
    
    // router.push(`/transcript?vid=\'${url}\'`)
    router.push(`/transcript?vid=${encodeURIComponent(url)}`);

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="https://youtube.com..."
                  {...field}
                  className="w-full rounded-md border border-input bg-background px-8 py-8 text-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit" className="p-8 text-lg">
            {"Let's Snap"}
            <span className="ml-2">
              <CornerDownLeft />
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

// import React from 'react'
// import { Input } from './ui/input'

// export const TranscriptForm = () => {
//   return (
//     <div>
//          <Input
//           type="search"
//           placeholder="Paste the URL..."
//           className="w-full rounded-md border border-input bg-background px-8 py-8 text-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
//         />
//     </div>
//   )
// }
