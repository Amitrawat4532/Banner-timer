// pages/index.tsx
import { FC, useState } from 'react';
import Head from 'next/head';
import Countdown, { CountdownRenderProps } from 'react-countdown';

const Counterdown: FC = () => {
  const [inputValues, setInputValues] = useState({
    days: 0,
    hours: 0,
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
      inputValues.hours * 60 * 60 * 1000 +
      inputValues.minutes * 60 * 1000 +
      inputValues.seconds * 1000;
    setTargetDate(endTime);
  };

  const clearCountdown = () => {
    setTargetDate(null);
    setInputValues({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return <span>Time's up!</span>;
    } else {
      return (
        <span>
          {days}d {hours < 10 ? `0${hours}` : hours}h:
          {minutes < 10 ? `0${minutes}` : minutes}m:
          {seconds < 10 ? `0${seconds}` : seconds}s
        </span>
      );
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Countdown Timer</title>
        <meta name="description" content="A countdown timer using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          {targetDate ? (
            <Countdown date={targetDate} renderer={renderer} />
          ) : (
            'Set your countdown'
          )}
        </h1>
        <div className="input-container">
          <label>
            Days:
            <input
              type="number"
              name="days"
              value={inputValues.days}
              onChange={handleChange}
            />
          </label>
          <label>
            Hours:
            <input
              type="number"
              name="hours"
              value={inputValues.hours}
              onChange={handleChange}
            />
          </label>
          <label>
            Minutes:
            <input
              type="number"
              name="minutes"
              value={inputValues.minutes}
              onChange={handleChange}
            />
          </label>
          <label>
            Seconds:
            <input
              type="number"
              name="seconds"
              value={inputValues.seconds}
              onChange={handleChange}
            />
          </label>
          <div className="buttons">
            <button onClick={startCountdown}>Start</button>
            <button onClick={clearCountdown}>Clear</button>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          background-color: #ffa500;
          color: #000;
          font-size: 24px;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .input-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        label {
          margin: 5px;
          font-size: 16px;
        }

        input {
          font-size: 16px;
          padding: 5px;
          margin-left: 10px;
          width: 60px;
        }

        .buttons {
          margin-top: 20px;
        }

        button {
          font-size: 16px;
          padding: 10px;
          margin: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Counterdown;
