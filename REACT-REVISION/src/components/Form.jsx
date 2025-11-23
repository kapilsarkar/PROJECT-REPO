import { useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Enter Password";
  };
  const toggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };
  return (
    <>
      <div>
        <h2>Use Ref hook</h2>
        <input ref={inputRef} type="text" placeholder="Enter..." />
        <button onClick={inputHandler}>Focus On Input Field</button>
        <button onClick={toggleHandler}>Toggle</button>
      </div>
    </>
  );
};

export default Form;
