import { useEffect, useState } from "react"; 
import "../styling/Social.css";

export default function Social({ imageSrc, alt, href }) {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!hovering) return;

    const timer = setTimeout(() => {
      window.location.href = href;
    }, 1500);

    return () => clearTimeout(timer);
  }, [hovering, href]);

  return (
    <div className={`social-box ${hovering ? "hovering" : ""}`} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <img src={imageSrc} alt={alt} className="social-image" />
    </div>
  );
}