import Link from "next/link";

const focus = () => {
  return (
    <div className="flex flex-row justify-center align-center gap-2">
      <input
        type="text"
        placeholder="Click Input"
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="px-4 py-2 rounded ml-2  bg-green-500 text-white focus:ring-2 focus:ring-green-700 ">
        Click Me
      </button>

      <Link
        href={"/core"}
        className="text-blue-600 underline focus:outlin-none focus:ring-2 focus:ring-blue-400"
      >
        Link
      </Link>

      <textarea
        className="border  rounded p-2 focus:ring-2 focus:outline-none focus:ring-purple-500"
        defaultValue="TextArea Section"
      />
    </div>
  );
};

export default focus;
