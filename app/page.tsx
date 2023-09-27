import Image from "next/image";
import yawningGif from "@/assets/yawning.gif";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-wrap w-full justify-center">
        <h1 className=" w-full text-center mb-7  ">
          <span className="bg-sky-900 text-3xl text-white py-3 px-8 rounded-md">
            My portfolio is building SOOON ...{" "}
          </span>
        </h1>
        <div className="w-96 h-96">
          <Image
            src={yawningGif}
            alt="Vercel Logo"
            className="w-full h-full"
            priority
          />
        </div>
      </div>
    </main>
  );
}
