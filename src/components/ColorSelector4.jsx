import { memo } from "react";
function ColorSelector4(props) {
  return (
    <div
      style={{ backgroundColor: "yellow" }}
      className="color"
      onClick={() => {
        props.setColor("yellow");
      }}
    ></div>
  );
}
export default memo(ColorSelector4);
