import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div class="grid h-[70vh] px-4 bg-white place-content-center">
        <div className="flex flex-col space-y-4 text-gray-500">
          <h1 class="tracking-widest  uppercase justify-center lg:text-3xl">
            404 | Are You Lost?
            <br />
          </h1>
          <Link href="/">
            <button className="w-full border-2 py-1 text-gray-600 cursor-pointer border-gray-400 hover:scale-105 transition-all ease-in duration-200">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
