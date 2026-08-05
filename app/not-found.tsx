import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        {/* <Image
          src={notFound}
          alt="Page not found"
          width={500}
          height={500}
          className="mx-auto mb-8"
        /> */}

        <p className="uppercase tracking-[0.2em] text-sm text-yellowText">
          404 Error
        </p>

        <h1 className="mt-3 text-3xl md:text-6xl font-cantataOne">
          Oops! This page doesn't exist.
        </h1>

        <p className="mt-4 text-darkText">
          The page you're looking for may have been moved, deleted, or the URL
          might be incorrect.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-[#2E0F0A] px-6 py-3 text-white hover:opacity-90"
          >
            Back Home
          </Link>

          <Link
            href="/shop"
            className="rounded-md border border-[#2E0F0A] px-6 py-3 hover:bg-[#2E0F0A] hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
