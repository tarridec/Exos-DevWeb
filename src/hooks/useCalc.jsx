import {useState, useEffect} from "react";

const useCalc = () => {
  const [display, setDisplay] = useState("");
  const [history, setHistory] = useState([]);

  const onTap = (e) => {
    const c = e.target.innerText;
    console.log(c);

    if ("0123456789.+-*/".includes(c)) {
      setDisplay(display + c);
    } else if (c === "C") {
      setDisplay("");
    } else if (c === "<") {
      setDisplay(display.slice(0, -1));
    } else if (c === "=") {
      try {
        const res = eval(display);
        setDisplay(res.toString());
        setHistory([display + "=" + res, ...history ].slice(0, 8));
      } catch (e) {
        setDisplay("Error");
      }
    }
  }

  return ({
    onTap,
    display,
    history
  });
}

export default useCalc;