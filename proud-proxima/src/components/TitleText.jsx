import "../styling/TitleText.css";
import { useEffect, useState } from "react";

export default function Typewriter() {
  const text = "Hi, I'm Aviral Gupta.";
  const speed = 90;

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="title-text">
        {displayedText}
        <span className="cursor">|</span>
    </p>
  );
}