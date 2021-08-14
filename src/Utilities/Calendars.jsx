import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

export default function Calendars() {
  let now = new Date();
  let current = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
      </MuiPickersUtilsProvider>
    </>
  );
}
