import React, { useState } from "react";

export default function StackList({ users, background }) {
  const [slide, setSlide] = useState(0);

  const slideChangeInterval = setInterval(() => {
    nextSlide();
  }, 3000);

  const nextSlide = () => {
    clearInterval(slideChangeInterval);
    if (slide >= users.length / 2 - 1) return setSlide(0);
    setSlide(slide + 1);
  };
  const prevSlide = () => {
    clearInterval(slideChangeInterval);
    if (slide <= 0) return;
    setSlide(slide - 1);
  };
  if (users.length <= 0) {
    return;
  }

  return (
    <div className="stack-wrapper">
      <div className={`stack-list ${background ? "stack-list-bg" : ""}`}>
        {users.map((user, index) => (
          <div
            key={index}
            className={`stack-list-element`}
            style={{ transform: `translateX(${slide * -100}%)` }}
          >
            <img
              src={user.image}
              alt={`user${index + 1}`}
              className="list-image"
            />
            <h6 className="stack-name">{user.name}</h6>
            <h6 className="list-text">{user.time}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
