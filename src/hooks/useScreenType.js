import { useEffect, useState } from "react";

export default function useScreenType() {
  const [type, setType] = useState("desktop");

  const calculate = () => {
    const width = window.innerWidth;

    if (width >= 1600) {
      setType("tv");        // Factory TV
    } else if (width >= 1200) {
      setType("desktop");   // Laptop
    } else {
      setType("small");     // Small screens (optional)
    }
  };

  useEffect(() => {
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return type;
}