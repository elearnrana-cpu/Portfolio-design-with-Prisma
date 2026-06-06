"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations";

export type ContactFormState = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string[]>>;
};

export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message")
  });

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors
    };
  }

  try {
    await prisma.contactMessage.create({ data: parsed.data });
    revalidatePath("/");

    return {
      ok: true,
      message: "Thanks. Your message has been saved."
    };
  } catch {
    return {
      ok: false,
      message: "The message could not be saved yet. Check DATABASE_URL and try again."
    };
  }
}
