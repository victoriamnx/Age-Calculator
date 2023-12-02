function App() {
  return (
    <main className="flex justify-center items-center h-screen font-poppins bg-gray-100">
      <div className="flex flex-col bg-white p-14 rounded-tl-lg rounded-r-lg gap-8">
        <div className="flex  ">
          <div className="flex flex-col">
            <label className="text-gray-400 font-poppins font-bold" htmlFor="">
              DAY
            </label>
            <input type="text" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 font-poppins font-bold" htmlFor="">
              MONTH
            </label>
            <input type="text" />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400 font-poppins font-bold" htmlFor="">
              YEAR
            </label>
            <input type="text" />
          </div>
        </div>

        <div className="flex  h-px w-full bg-zinc-200 "></div>

        <div className="flex flex-col">
          <div className="flex gap-2">
            <h1 className="text-purple-500  italic font-bold text-8xl">0</h1>
            <h2 className="text-8xl italic font-bold">days</h2>
          </div>
          <div className="flex gap-2">
            <h1 className="text-purple-500 italic font-bold text-8xl">0</h1>
            <h2 className="text-8xl  italic font-bold">months</h2>
          </div>
          <div className="flex gap-2">
            <h1 className="text-purple-500 italic font-bold text-8xl">0</h1>
            <h2 className="text-8xl italic font-bold">years</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
