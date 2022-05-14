import React from "react";

const time = () => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const curr = new Date().getMilliseconds();
  return (
    <>
     <h1>Hello, My name is VR</h1>
     <p>Todays Date is {currDate}</p>
     <p>Current Time is {currTime}</p>
     <p>Current getMilliseconds {curr}</p>
    </>
  );
};
export default time;