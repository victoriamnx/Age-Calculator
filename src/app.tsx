import { useState, useEffect } from "react";
import { Input } from "./components/ui/input";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  parse,
} from "date-fns";

function App() {
  const [hovered, setHovered] = useState(false);
  const [dayValue, setDayValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [yearsResult, setYearsResult] = useState("--");
  const [monthsResult, setMonthsResult] = useState("--");
  const [daysResult, setDaysResult] = useState("--");

  useEffect(() => {
    calculateResults();
  }, [dayValue, monthValue, yearValue]);

  const validateDay = () => {
    const dayNumber = parseInt(dayValue, 10);
    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
      setDayError("Must be a valid day");
    } else {
      setDayError("");
    }
  };

  const validateMonth = () => {
    const monthNumber = parseInt(monthValue, 10);
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
      setMonthError("Must be a valid month");
    } else {
      setMonthError("");
    }
  };

  const validateYear = () => {
    const yearNumber = parseInt(yearValue, 10);
    if (isNaN(yearNumber) || yearNumber.toString().length > 4) {
      setYearError("Must be a valid year");
    } else {
      setYearError("");
    }
  };

  const calculateResults = () => {
    const dayNumber = parseInt(dayValue, 10);
    const monthNumber = parseInt(monthValue, 10);
    const yearNumber = parseInt(yearValue, 10);

    if (!isNaN(dayNumber) && !isNaN(monthNumber) && !isNaN(yearNumber)) {
      const inputDate = parse(
        `${yearNumber}-${monthNumber.toString().padStart(2, "0")}-${dayNumber
          .toString()
          .padStart(2, "0")}`,
        "yyyy-MM-dd",
        new Date()
      );
      const currentDate = new Date();

      const yearsDiff = differenceInYears(currentDate, inputDate);
      const monthsDiff = differenceInMonths(currentDate, inputDate) % 12; // Calcular o resto para obter o número de meses dentro do ano
      const daysDiff = differenceInDays(currentDate, inputDate);

      setYearsResult(`${yearsDiff}`);
      setMonthsResult(`${monthsDiff}`);
      setDaysResult(`${daysDiff}`);
    } else {
      setYearsResult("--");
      setMonthsResult("--");
      setDaysResult("--");
    }
  };

  return (
    <main className="flex justify-center items-center h-screen font-poppins bg-[#F0F0F0]">
      <div className="flex flex-col bg-[white] max-[700px]:px-[1.5rem] max-[700px]:py-[3rem] max-[700px]:gap-[2rem] p-[3.5rem] rounded-t-[1.5rem] rounded-bl-[1.5rem] max-[700px]:rounded-br-[6.25rem] rounded-br-[12.5rem]">
        <div id="inputs" className="flex max-[700px]:gap-[1rem] gap-[2rem]">
          <div
            className={`flex flex-col gap-[0.5rem] ${dayError ? "error" : ""}`}
          >
            <label
              className={`text-[#716F6F] tracking-[0.21875rem] font-poppins text-[0.875rem] font-bold ${
                dayError ? "error" : ""
              }`}
              htmlFor=""
            >
              DAY
            </label>
            <Input
              placeholder="DD"
              value={dayValue}
              onChange={(e) => setDayValue(e.target.value)}
              onBlur={validateDay}
            />
            {dayError && <span className="error-message">{dayError}</span>}
          </div>

          <div
            className={`flex flex-col gap-[0.5rem] ${
              monthError ? "error" : ""
            }`}
          >
            <label
              className={`text-[#716F6F] tracking-[0.21875rem] font-poppins text-[0.875rem] font-bold ${
                monthError ? "error" : ""
              }`}
              htmlFor=""
            >
              MONTH
            </label>
            <Input
              placeholder="MM"
              value={monthValue}
              onChange={(e) => setMonthValue(e.target.value)}
              onBlur={validateMonth}
            />
            {monthError && <span className="error-message">{monthError}</span>}
          </div>

          <div
            className={`flex flex-col gap-[0.5rem] ${yearError ? "error" : ""}`}
          >
            <label
              className={`text-[#716F6F] tracking-[0.21875rem] font-poppins text-[0.875rem] font-bold ${
                yearError ? "error" : ""
              }`}
              htmlFor=""
            >
              YEAR
            </label>
            <Input
              placeholder="YYYY"
              value={yearValue}
              onChange={(e) => setYearValue(e.target.value)}
              onBlur={validateYear}
            />
            {yearError && <span className="error-message">{yearError}</span>}
          </div>
        </div>

        <div id="divisor" className="flex justify-center items-center">
          <div className="flex max-[700px]:w-[115.5px] h-px w-[39.5rem] bg-[#DCDCDC] "></div>
          <div
            className={`svg-container ${
              hovered ? "hovered" : ""
            } cursor-pointer`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <svg
              className="max-[700px]:w-[4rem] max-[700px]:h-[4rem]"
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
          <div className="flex max-[700px]:w-[115.5px] h-px w-[0rem] bg-[#DCDCDC] "></div>
        </div>

        <div id="results" className="flex flex-col gap-2">
          <div className="flex gap-2">
            <h1 className="max-[700px]:text-[3.5rem] text-8xl text-[#854DFF] font-poppins italic font-bold ">
              {yearsResult}
            </h1>
            <h2 className="max-[700px]:text-[3.5rem] text-8xl italic font-poppins font-[800]">
              years
            </h2>
          </div>
          <div className="flex gap-2">
            <h1 className="max-[700px]:text-[3.5rem] text-8xl text-[#854DFF] font-poppins italic font-bold ">
              {monthsResult}
            </h1>
            <h2 className="max-[700px]:text-[3.5rem] text-8xl font-poppins italic font-[800]">
              months
            </h2>
          </div>
          <div className="flex gap-2">
            <h1 className="max-[700px]:text-[3.5rem] text-8xl text-[#854DFF] font-poppins italic font-bold ">
              {daysResult}
            </h1>
            <h2 className="max-[700px]:text-[3.5rem] text-8xl font-poppins italic font-[800]">
              days
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
