import { redirect } from "next/navigation";

import { db } from "@/db";

export default function SnippetCreatePage() {
  // Server Actions must be async functions.
  async function createSnippet(formData: FormData) {
    // This need to be a server action
    "use server"; // or else throws an error

    // Check the user's inputs and make sure they are valid
    const title = formData.get("title") as string; // .get(<name property of the input field>)
    const code = formData.get("code") as string;

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

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title:
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            id="title"
            name="title"
            required
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code:
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
