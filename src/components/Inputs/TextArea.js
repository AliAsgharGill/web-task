import React from "react";

const textAreaStyle = {
  medium: "w-full h-15 resize-none outline-0 ml-2 ",
  large: "w-full h-20 resize-none outline-0 ml-2 ",
};
const MyTextField = ({ style, placeholder, name }) => {
  const varient = textAreaStyle[style];
  return (
    <>
      <textarea
        name={name}
        placeholder={placeholder}
        className={varient}
      ></textarea>
    </>
  );
};

export default MyTextField;
