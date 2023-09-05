import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center">
        <SignIn />

        <section className='px-8 py-8 text-white'>
          <h1 className="text-lg font-bold">
            Secure sign-up powered by Clerk.
          </h1>
          <h1 className="text-lg font-bold">
            If you don't wish to sign up,
          </h1>
          <h1 className="text-lg font-bold">
          feel free to explore content using this account:
          </h1>
          <p>
            Email: <span className="font-mono text-yellow-400">threads.test.123@gmail.com</span>
          </p>
          <p>Password: <span className="font-mono text-yellow-400">threadstest</span></p>
        </section>
      </div>
    </>
  );
}