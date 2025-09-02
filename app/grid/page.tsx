import CenterContainer from "@/components/utils/CenterContainer";

const GridSystem = () => {
  return (
    <div className="min-h-screen flex items-center align-top bg-purple-500 text-center text-2xl text-bold">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        {/*  */}

        <ul className="grid grid-cols-6 gap-2 grid-flow-row-dense">
          <li className=" col-span-4 rounded-lg shadow-xl  bg-red-400 border">
            <div className="h-24">01</div>
          </li>
          <li className="col-span-3 rounded-lg shadow-xl bg-sky-400">
            {" "}
            <div className="h-24">02</div>
          </li>
          <li className="rounded-lg shadow-xl bg-amber-400">
            {" "}
            <div className="h-24">03</div>
          </li>
          <li className="rounded-lg shadow-xl bg-rose-400">
            {" "}
            <div className="h-24">04</div>
          </li>
          <li className="rounded-lg shadow-xl bg-pink-400">
            {" "}
            <div className="h-24">05</div>
          </li>
          <li className="rounded-lg shadow-xl  bg-emerald-400">
            {" "}
            <div className="h-24">06</div>
          </li>
          <li className="rounded-lg shadow-xl bg-fuchsia-400">
            {" "}
            <div className="h-24">07</div>
          </li>
          <li className="rounded-lg shadow-xl bg-indigo-400">
            {" "}
            <div className="h-24">08</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GridSystem;
