import { useState } from "react";
import "./styles.css";
import ColorSelector1 from "./components/ColorSelector1";
import ColorSelector2 from "./components/ColorSelector2";
import ColorSelector3 from "./components/ColorSelector3";
import ColorSelector4 from "./components/ColorSelector4";
export default function App() {
  const [color, setColor] = useState("gray");
  return (
    <div className="App">
      <h1 className="heading">Color Picker</h1>
      <div className="colorCointainer">
        <ColorSelector1 setColor={setColor} />
        <ColorSelector2 setColor={setColor} />
        <ColorSelector3 setColor={setColor} />
        <ColorSelector4 setColor={setColor} />
      </div>
      <div className="colorPicker" style={{ backgroundColor: color }}></div>
    </div>
  );
}
