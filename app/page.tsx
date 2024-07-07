"use client";
import Lottie from "react-lottie-player";
import lottieJson from "../public/clock.json";
import { useState } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

export default function Home() {
  const [inputValues, setInputValues] = useState({
    days: 0,
    minutes: 0,
    seconds: 0,
  });
  const [targetDate, setTargetDate] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: Number(value),
    }));
  };

  const startCountdown = () => {
    const now = new Date().getTime();
    const endTime =
      now +
      inputValues.days * 24 * 60 * 60 * 1000 +
      inputValues.minutes * 60 * 1000 +
      inputValues.seconds * 1000;
    setTargetDate(endTime);
  };

  const clearCountdown = () => {
    setTargetDate(null);
    setInputValues({ days: 0, minutes: 0, seconds: 0 });
  };

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <span>
          {days}:{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };
  return (
    <section>
      {/* Discount */}

      <div className="lg:flex justify-center items-center h-screen w-full flex-col border-2 border-red-400 hidden ">
        <div className="flex justify-between max-w-[1500px] rounded-[160px] py-1 px-5  items-center bg-banner  w-full">
          <div className="flex justify-center items-center gap-2">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 50, height: 50 }}
            />
            <h2 className="text-[18px] text-black font-semibold ">
              LIMITED TIME OFFER
            </h2>
          </div>

          <div className="">
            <h1 className="title ">
              {" "}
              Ends in :
              {targetDate ? (
                <span className="font-semibold tex-[18px]">
                  {" "}
                  <Countdown date={targetDate} renderer={renderer} />{" "}
                </span>
              ) : (
                " 0 : 0 : 0 "
              )}
            </h1>
          </div>
          <div className="flex justify-center items-center gap-5">
            <h2 className="text-[18px] text-black font-semibold">
              GET 10% OFF
            </h2>
            <h2 className="text-[18px] text-black">
              Use Code: <span className="font-semibold">EXAMSTART</span>
            </h2>
          </div>
        </div>

        <div className="input-container gap-4 mt-9 flex border-2 border-red-500 justify-center items-center py-3 px-3 rounded-lg">
          <div className="">
            <h4 className="text-black text-[18px] font-semibold">
              Please select time from here :
            </h4>
          </div>
          <label className="flex gap-3">
            Hours:
            <input
              type="number"
              name="days"
              value={inputValues.days}
              onChange={handleChange}
              className="border-2 border-black px-1 rounded-md"
            />
          </label>

          <label className="flex gap-3">
            Minutes:
            <input
              type="number"
              name="minutes"
              value={inputValues.minutes}
              onChange={handleChange}
              className="border-2 border-black px-1 rounded-md"
            />
          </label>
          <label className="flex gap-3">
            Seconds:
            <input
              type="number"
              name="seconds"
              value={inputValues.seconds}
              onChange={handleChange}
              className="border-2 border-black px-1 rounded-md"
            />
          </label>
        </div>
        <div className="buttons mt-9 flex gap-5">
          <button
            onClick={startCountdown}
            className="bg-green-900 text-white text-[18px] rounded-xl px-6 py-2"
          >
            Start Timer
          </button>
          <button
            onClick={clearCountdown}
            className="bg-red-900 rounded-xl px-6 py-2 text-[18px] text-white"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Mobile  */}

      <div className="flex lg:hidden flex-col justify-center items-center w-full h-screen px-[15px] ">
        <div className="border-2  border-[#ffd57c] gap-2 flex flex-col rounded-lg bg-[#ffecca] w-full justify-center items-center py-[10px]">
          <div className="flex justify-center items-center gap-2 w-full ">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 40, height: 40 }}
            />
            <div className="flex justify-center items-center flex-col gap-1">
              <h2 className="text-[14px] text-black font-semibold ">
                LIMITED TIME OFFER
              </h2>
              <hr className="h-[0.5px] bg-[#a1a1a1] w-[85%]"></hr>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <h1 className="title ">
              {" "}
              Ends in :
              {targetDate ? (
                <span className="font-semibold tex-[14px]">
                  {" "}
                  <Countdown date={targetDate} renderer={renderer} />{" "}
                </span>
              ) : (
                " 0 : 0 : 0 "
              )}
            </h1>
          </div>
          <div className="flex justify-center items-center gap-5 bg-[#ffd57c] w-full py-1">
            <h2 className="text-[14px] text-black font-semibold">
              GET 10% OFF
            </h2>
            <h2 className="text-[14px] text-black">
              Use Code: <span className="font-semibold">EXAMSTART</span>
            </h2>
          </div>
        </div>
        <div className="input-container gap-4 mt-9 flex border-2 flex-col  border-red-500 justify-center items-center py-3 px-3 rounded-lg">
          <div className="flex flex-col justify-center items-center gap-5">
            <h4 className="text-black text-[18px] font-semibold">
              Please select time from here :
            </h4>
            <label className="flex gap-3">
              Hours:
              <input
                type="number"
                name="days"
                value={inputValues.days}
                onChange={handleChange}
                className="border-2 border-black px-1 rounded-md"
              />
            </label>

            <label className="flex gap-3">
              Minutes:
              <input
                type="number"
                name="minutes"
                value={inputValues.minutes}
                onChange={handleChange}
                className="border-2 border-black px-1 rounded-md"
              />
            </label>
            <label className="flex gap-3">
              Seconds:
              <input
                type="number"
                name="seconds"
                value={inputValues.seconds}
                onChange={handleChange}
                className="border-2 border-black px-1 rounded-md"
              />
            </label>
          </div>
          <div className="buttons mt-9 flex gap-5">
            <button
              onClick={startCountdown}
              className="bg-green-900 text-white text-[18px] rounded-xl px-6 py-2"
            >
              Start Timer
            </button>
            <button
              onClick={clearCountdown}
              className="bg-red-900 rounded-xl px-6 py-2 text-[18px] text-white"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
