import { memo } from "react";
function ColorSelector2(props) {
  return (
    <div
      style={{ backgroundColor: "green" }}
      className="color"
      onClick={() => {
        props.setColor("green");
      }}
    ></div>
  );
}
export default memo(ColorSelector2);
