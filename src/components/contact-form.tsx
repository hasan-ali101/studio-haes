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
    <div className="flex flex-col gap-y-4">
      <h1 className="text-secondary/70 text-xl font-medium">GET IN TOUCH</h1>
      <p className="text-sm">
        If you&apos;d like to get in touch with me, you can use the form below:
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 pb-20"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <InputLabelInner
                    className="max-w-96 bg-white/5"
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
                    className="max-w-96 bg-white/5"
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
                    className="max-w-96 bg-white/5"
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
                    className="max-w-96 bg-white/5"
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
                    className="h-48 max-w-96 bg-white/5"
                    placeholder="Wrire your message here..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-secondary/70" />
              </FormItem>
            )}
          />
          <Button variant={"secondary"} className="w-40" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
