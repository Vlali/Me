import { useState, useEffect } from "react";

const Center = () => {
  let red = 100;
  let green = 100;
  let blue = 100;
  const [color, setColor] = useState([red, green, blue]);
  useEffect(() => {
    const changeColor = () => {
      setInterval(() => {
        if (red + 1 < 245) {
          red += 1;
        } else {
          red = 100;
        }
        if (green + 1 < 245) {
          green += 1;
        } else {
          green = 100;
        }
        if (blue + 1 < 245) {
          blue += 1;
        } else {
          blue = 100;
        }
        setColor([red, green, blue]);
      }, 20);
    };
    changeColor();
  }, []);
  return (
    <h1 style={{ color: `rgb(${color[0]},${color[1]},${color[2]}` }}>
      Soon...
    </h1>
  );
};
export default Center;
