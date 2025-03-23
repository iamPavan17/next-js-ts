"use server";

import { redirect } from "next/navigation";

import { db } from "@/db";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // Check the user's inputs and make sure they are valid
  const title = formData.get("title") as string; // .get(<name property of the input field>)
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3) {
    return {
      message: "Title must be longer",
    };
  }

  if (typeof code !== "string" || code.length < 10) {
    return {
      message: "Code must be longer",
    };
  }

  // Create a new record in the database
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  // Shows in the terminal
  console.log(snippet); // { id: 1, title: 'Hello world', code: 'console.log("Hello World!");' }
  // Redirect the user back to the root route
  redirect("/");
}
