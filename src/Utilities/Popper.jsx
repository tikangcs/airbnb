import React from "react";
import Popper from "@material-ui/core/Popper";

export default function PopperComponent({ id, open, anchorEl, children }) {
  return (
    <Popper
      id={id}
      style={{ backgroundColor: "white", zIndex: 1, color: "black" }}
      open={open}
      anchorEl={anchorEl}
      placement="bottom"
      disablePortal={true}
      modifiers={{
        flip: {
          enabled: false,
        },
        preventOverflow: {
          enabled: true,
          boundariesElement: "scrollParent",
        },
        arrow: {
          enabled: false,
        },
      }}
    >
      {children}
    </Popper>
  );
}
