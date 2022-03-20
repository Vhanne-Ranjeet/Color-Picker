import { memo } from "react";
function ColorSelector1(props) {
  return (
    <div
      style={{ backgroundColor: "red" }}
      className="color"
      onClick={() => {
        props.setColor("Red");
      }}
    ></div>
  );
}
export default memo(ColorSelector1);
