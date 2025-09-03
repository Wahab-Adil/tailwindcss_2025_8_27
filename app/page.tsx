import CenterContainer from "@/components/utils/CenterContainer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col  border">
      <CenterContainer
        children={
          <div className="text-center my-3">
            <h1 className="text-4xl text-blue-500 text-bold ">Core Concepts</h1>
            <Link
              href="core"
              className="inline-block px-6 py-2 bg-blue-200 text-black text-bold font-semibold rounded hover:bg-blue-300 transition duration-300 w-[150px] h-[40px] text-center"
            >
              Core
            </Link>
          </div>
        }
      />

      <CenterContainer
        children={
          <div className="text-center my-3">
            <h1 className="text-4xl text-blue-500 text-bold ">
              Grid Layout Concepts
            </h1>
            <Link
              href="grid"
              className="inline-block px-6 py-2 bg-blue-200 text-black text-bold font-semibold rounded hover:bg-blue-300 transition duration-300 w-[150px] h-[40px] text-center"
            >
              Grid Layout
            </Link>
          </div>
        }
      />

      <CenterContainer
        children={
          <div className="text-center my-3">
            <h1 className="text-4xl text-blue-500 text-bold ">
              Transition & Animations Concepts
            </h1>
            <Link
              href="transition"
              className="inline-block px-6 py-2 bg-blue-200 text-black text-bold font-semibold rounded hover:bg-blue-300 transition duration-300 w-[150px] h-[40px] text-center"
            >
              Transition & Animations
            </Link>
          </div>
        }
      />
    </div>
  );
}
