import { Header } from "@/components";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div class="grid h-full px-4  place-content-center">
        <div className="flex flex-col space-y-4 text-gray-300">
          <h1 class="tracking-widest  uppercase justify-center lg:text-3xl">
            404 | Are You Lost?
            <br />
          </h1>
          <Link href="/">
            <button className="w-full border-2 py-1 text-gray-400 cursor-pointer border-gray-400 hover:brightness-150 transition-all ease-in duration-200">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
