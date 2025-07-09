import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen p-12 justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-300">
      <SignIn />
    </div>
  );
}
