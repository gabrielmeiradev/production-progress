import React, { useState, useEffect } from "react";

export default function StackList({ users, background, total1, total2 }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slideChangeInterval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(slideChangeInterval);
  }, [slide]);

  const nextSlide = () => {
    if (slide >= users.length / 2 - 1) return setSlide(0);
    setSlide(slide + 1);
  };

  // const prevSlide = () => {
  //   if (slide <= 0) return;
  //   setSlide(slide - 1);
  // };

  if (users.length <= 0) {
    return null;
  }

  return (
    <div className="stack-wrapper">
      <div className={`stack-list ${background ? "stack-list-bg" : ""}`}>
        {users.map((user, index) => (
          <div
            key={index}
            className={`stack-list-element ${
              index === slide * 2 || index === slide * 2 + 1 ? "visible" : ""
            }`}
            style={{ transform: `translateX(${slide * -100}%)` }}
          >
            {user.image ? (
              <img
                src={user.image}
                alt={`user${index + 1}`}
                className="list-image"
              />
            ) : (
              <div style={{ width: "24px", height: "24px" }}></div>
            )}
            <h6 className="stack-name">{user.name}</h6>
            {/* <h6 className="stack-name">{'I: ' + index + ' SI' + slide + ' VI: ' + ((index === slide*2 || index === slide*2 + 1) ? "T" : "F")}</h6> */}
            <h6 className="list-text">{user.time}</h6>
          </div>
        ))}
      </div>
      {(total1 > 0 || total2 > 0) && (
        <div className="stack-totals">
          <h6 className="stack-total">{total1}</h6>
          <h6 className="stack-total">{total2}</h6>
        </div>
      )}
    </div>
  );
}
