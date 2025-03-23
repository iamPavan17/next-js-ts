"use client";

interface ErrorPageProps {
  // error -> So that's going to contain some information about exactly what went wrong.
  error: Error;
  // The reset is going to allow us to kind of automatically refresh a route.
  // Usually we add in a button that user can click on.
  // And whenever a user does we would usually run this reset function.
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div>
      {/* Example: throw new Error("Something went wrong!!!") 
                   error.message = Something went wrong!!!
      */}
      <h1 className="text-xl bold">{error.message}</h1>
    </div>
  );
}
