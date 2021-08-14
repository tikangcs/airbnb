import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Popper from "@material-ui/core/Popper";

export default function Test() {
  let now = new Date();
  const [selectedDate, handleDateChange] = useState(new Date()); //useState hook for current date to pass into date picker component
  const [anchorEl, setAnchorEl] = React.useState(null); //state hook

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    console.log(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  let current = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <button aria-describedby={id} type="button" onClick={handleClick}>
          Location
        </button>
        <Popper
          id={id}
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
          <div className="popper--wrapper">Go anywhere, anytime</div>
        </Popper>
        <button aria-describedby={id} type="button" onClick={handleClick}>
          Check in/out dates
        </button>
        <Popper
          id={id}
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
          <div className="popper--wrapper">
            <div className="popper-buttons">
              <button>Calendar</button>
              <button>I'm flexible</button>
            </div>
            <div className="popper--container">
              <DatePicker
                disablePast="true"
                disableToolbar
                autoOk
                onAccept={(date) => console.log(date)}
                orientation="landscape"
                variant="static"
                openTo="date"
                value={selectedDate}
                onChange={handleDateChange}
              />
              <DatePicker
                disablePast="true"
                disableToolbar
                autoOk
                onAccept={(date) => console.log(date)}
                orientation="landscape"
                variant="static"
                openTo="date"
                value={current}
                onChange={handleDateChange}
              />
            </div>
          </div>
        </Popper>
      </MuiPickersUtilsProvider>
    </>
  );
}
