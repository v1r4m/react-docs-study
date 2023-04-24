import React from "react";

export default function Event1() {
  const handleClick = () => {
    alert("You clicked me!");
  };

  // case 1
  return <button onClick={handleClick}>Click me</button>;

  // case 2
  // return (
  //   <button
  //     onClick={() => {
  //       alert("You clicked me!");
  //     }}
  //   >
  //     Click me
  //   </button>
  // );

  // 주의 !!
  // return <button onClick={handleClick()}>Click me</button>;
}
