import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters.").max(80, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters.").max(120, "Subject is too long."),
  message: z.string().trim().min(10, "Message must be at least 10 characters.").max(2000, "Message is too long.")
});

export type ContactInput = z.infer<typeof contactSchema>;
