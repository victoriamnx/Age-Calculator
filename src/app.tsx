import { Input } from "./components/ui/input";

function App() {
  return (
    <main className="flex justify-center items-center h-screen font-poppins bg-gray-100">
      <div className="flex flex-col bg-white p-14 rounded-3xl gap-8">
        <div className="flex">
          <div className="flex flex-col">
            <label className="text-gray-400 font-poppins font-bold" htmlFor="">
              DAY
            </label>
            <Input />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 font-poppins font-bold" htmlFor="">
              MONTH
            </label>
            <Input />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 font-poppins font-bold" htmlFor="">
              YEAR
            </label>
            <Input />
          </div>
        </div>

        <div className="flex  h-px w-full bg-zinc-200 "></div>

        <div className="flex flex-col">
          <div className="flex gap-2">
            <h1 className="text-purple-500 font-poppins italic font-bold text-8xl">
              0
            </h1>
            <h2 className="text-8xl font-poppins italic font-bold">days</h2>
          </div>
          <div className="flex gap-2">
            <h1 className="text-purple-500 font-poppins italic font-bold text-8xl">
              0
            </h1>
            <h2 className="text-8xl font-poppins italic font-bold">months</h2>
          </div>
          <div className="flex gap-2">
            <h1 className="text-purple-500 font-poppins italic font-bold text-8xl">
              0
            </h1>
            <h2 className="text-8xl italic font-poppins font-bold">years</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
