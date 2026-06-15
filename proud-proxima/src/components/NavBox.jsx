import { useEffect, useState } from "react"; 
import "../styling/NavBox.css";

export default function NavBox({ page, href }) {
  const [show, setShow] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hovering) return;

    const timer = setTimeout(() => {
      window.location.href = href;
    }, 1500);

    return () => clearTimeout(timer);
  }, [hovering, href]);

  return (
    <div className={`nav-box ${show ? "show" : ""}`} onMouseEnter={() => show && setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <span className="nav-text">{page}</span>
    </div>
  );
}