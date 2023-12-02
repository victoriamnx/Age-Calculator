function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white p-14 rounded-tl-lg rounded-r-lg">
        <div className="flex">
        <div className="flex flex-col">
            <label className="" htmlFor="">DAY</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">MONTH</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">YEAR</label>
            <input type="text" />
          </div>
        </div>

        <div className="divisor"></div>

        <div className="result"></div>
      </div>
    </main>
  );
}

export default App;
