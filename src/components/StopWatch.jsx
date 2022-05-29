import React, { useState } from "react";

const Stopwatch = () => {
  const [watch, setwatch] = useState(0);
  const [timer, settimer] = useState(null);
  const [status, setStatus] = useState(true);

  const start = () => {
    setStatus(!status);
    if (!timer) {
      let id = setInterval(() => {
        setwatch((e) => e + 10);
      }, 10);
      settimer(id);
    }
  };

  const stop = () => {
    setStatus(!status);
    clearInterval(timer);
    settimer(null);
  };

  const reset = () => {
    clearInterval(timer);
    setwatch(0);
  };
  function msToTime(duration) {
    var milliseconds = parseInt(duration % 1000),
      seconds = parseInt((duration / 1000) % 60),
      minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (hours == 0 && minutes == 0) {
      return seconds + "s" + " " + milliseconds / 10;
    } else if (hours == 0 && minutes > 0) {
      return minutes + "m" + " " + seconds + "s" + " " + milliseconds / 10;
    } else if (hours > 0) {
      return (
        hours +
        "h" +
        " " +
        minutes +
        "m" +
        " " +
        seconds +
        "s" +
        " " +
        milliseconds / 10
      );
    }
  }

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{msToTime(watch)}</h1>
      <button onClick={status ? start : stop}>{status ? "Start" : "Stop"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
