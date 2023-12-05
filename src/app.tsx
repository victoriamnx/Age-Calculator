import { Input } from "./components/ui/input";
import { useState } from "react";

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <main className="flex justify-center items-center h-screen font-poppins bg-[#F0F0F0]">
      <div className="flex flex-col bg-white p-14 rounded-t-[1.5rem] rounded-bl-[1.5rem] rounded-br-[12.5rem]">
        <div className="flex gap-8">
          <div className="flex flex-col gap-[0.5rem]">
            <label
              className="text-[#716F6F] tracking-[0.21875rem] font-poppins text-[0.875rem] font-bold"
              htmlFor=""
            >
              DAY
            </label>
            <Input placeholder="DD" />
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label
              className="text-[#716F6F] tracking-[0.21875rem] font-poppins text-[0.875rem] font-bold"
              htmlFor=""
            >
              MONTH
            </label>
            <Input placeholder="MM" />
          </div>

          <div className="flex flex-col gap-[0.5rem]">
            <label
              className="text-[#716F6F] tracking-[0.21875rem] font-poppins text-[0.875rem] font-bold"
              htmlFor=""
            >
              YEAR
            </label>
            <Input placeholder="YYYY" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex h-px w-[39.5rem] bg-[#DCDCDC] "></div>
          <div
            className={`svg-container ${
              hovered ? "hovered" : ""
            } cursor-pointer`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill={hovered ? "#151515" : "#854DFF"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="96"
                height="96"
                rx="48"
                fill={hovered ? "#151515" : "#854DFF"}
              />
              <path
                d="M26 48.0189C33.3333 47.6859 48 51.6158 48 70"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M48 70V26" stroke="white" strokeWidth="2" />
              <path
                d="M70 48.0189C62.6667 47.6859 48 51.6158 48 70"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2">
            <h1 className="text-[#854DFF] font-poppins italic font-bold text-8xl">
              --
            </h1>
            <h2 className="text-8xl italic font-poppins font-[800]">years</h2>
          </div>
          <div className="flex gap-2">
            <h1 className="text-[#854DFF] font-poppins italic font-bold text-8xl">
              --
            </h1>
            <h2 className="text-8xl font-poppins italic font-[800]">months</h2>
          </div>
          <div className="flex gap-2">
            <h1 className="text-[#854DFF] font-poppins italic font-bold text-8xl">
              --{" "}
            </h1>
            <h2 className="text-8xl font-poppins italic font-[800]">days</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
