import './App.css';
import React from "react";
import Head from "./Head";
// import Date from "./Date";
import DateComponent from "./DateComponent";
import DateControl from "./DateControl";
// import MonthComponent from "./MonthComponent";
// import MonthControl from "./MonthControl";



function App() {
  return (
    <React.Fragment>
      <Head />
      <DateComponent />
      {/* <DateControl /> */}
      {/* <MonthComponent />
      <MonthControl /> */}
    </React.Fragment>
  );
}

export default App;
