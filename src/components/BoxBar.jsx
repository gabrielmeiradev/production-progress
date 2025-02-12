import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import StackList from "./StackList";
import makeArrow from "../utils/arrows";
import MiniProgressBar from "./MiniProgressBar";

export default function BoxBar({
  top,
  left,
  background,
  product2,
  plant,
  barID,
  data,
}) {
  const [time, setTime] = useState("");
  const convertTimer = (timer) => {
    const [datePart, timePart] = timer.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hours, minutes, seconds] = timePart.split(":").map(Number);

    const endTime = new Date(year, month - 1, day, hours, minutes, seconds);
    const now = new Date();

    const timeDiff = now - endTime;

    if (timeDiff <= 0) {
      return "0d 00:00:00";
    }

    const diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    const timeString = `${diffDays > 0 ? `${diffDays}d ` : ""}${String(
      diffHours
    ).padStart(2, "0")}:${String(diffMinutes).padStart(2, "0")}:${String(
      diffSeconds
    ).padStart(2, "0")}`;
    return timeString;
  };

  if (data.active_since) {
    setInterval(() => {
      setTime(convertTimer(data.active_since));
    }, 1000);
  }

  const id = setInterval(() => {
    const c = makeArrow(barID);
    if (c) {
      clearInterval(id);
    }
  }, 1000);

  return (
    <div className="box-bar" style={{ top: `${top}%`, left: `${left}%` }}>
      <ProgressBar porcent={data.total_porcentage} plant={plant} />

      <StackList users={data.users} background={background} />

      <canvas className={`arrow-${barID}`} id={`arrow${barID}`}></canvas>
      <canvas className={`arrow-${barID}`} id={`arrow-line${barID}`}></canvas>
      <div className="mini-circle-1">
        <h1 className="mini-circle-porcent">{data.turn_3}</h1>
      </div>
      <div className="mini-circle-2">
        <h1 className="mini-circle-porcent">{data.turn_2}</h1>
      </div>
      <div className="mini-circle-3">
        <h1 className="mini-circle-porcent">{data.turn_1}</h1>
      </div>
      {data.active_since && (
        <fieldset className={`timer ${data.inactive ? "inactive" : ""} `}>
          <legend>{data.inactive ? "INATIVO" : "Formulando"}</legend>

          <span>{time}</span>
        </fieldset>
      )}

      <div className="mini-progress-bar">
        <MiniProgressBar />

        <div className="porcentage-div-mini-bar">
          <h1 className="porcentage-mini-bar">{data.product.porcentage}%</h1>
        </div>
        <div className="product-name-area">
          <>
            <div className="product2-div">
              <img
                className="product2"
                src={
                  data.product.image
                    ? data.product.image
                    : require(`../assets/${product2}.png`)
                }
                alt="product"
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
