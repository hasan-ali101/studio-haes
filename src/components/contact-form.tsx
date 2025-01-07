import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Textarea,
  InputLabelInner,
  InputMobile,
} from "@/components/ui";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  text: z.string().min(2, {
    message: "This field is required.",
  }),
  mobile: z
    .string()
    .min(12, { message: "Invalid number" })
    .max(18, { message: "Invalid number" }),
  subject: z.string(),
});

export type ContactForm = z.infer<typeof formSchema>;

const ContactForm = ({
  onSubmit,
}: {
  onSubmit: (data: ContactForm) => void;
}) => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      text: "",
      mobile: "",
      subject: "",
    },
  });

  return (
    <div className="mb-10 flex max-w-96 flex-col gap-y-4">
      <h1 className="text-xl font-semibold text-secondary/70">GET IN TOUCH</h1>
      <p className="text-sm">
        Use the form below to send me a message; I&apos;ll get back to you as
        soon as possible.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputLabelInner
                    className="bg-white/5"
                    label="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-secondary/70" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputLabelInner
                    className="bg-white/5"
                    label="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-secondary/70" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputMobile
                    className="bg-white/5"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage className="text-secondary/70" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputLabelInner
                    className="= bg-white/5"
                    label="Subject"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-secondary/70" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="h-32 bg-white/5 md:h-48"
                    placeholder="Write your message here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-secondary/70" />
              </FormItem>
            )}
          />
          <Button className="w-40" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
