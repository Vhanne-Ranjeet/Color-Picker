import { memo } from "react";
function ColorSelector3(props) {
  return (
    <div
      style={{ backgroundColor: "blue" }}
      className="color"
      onClick={() => {
        props.setColor("blue");
      }}
    ></div>
  );
}
export default memo(ColorSelector3);
