import React from "react";
import DateComponent from './DateComponent';

export default class DateControl extends React.Component {

  static marketSchedule = [  
    {  
       day: "Sunday",
       location: "Lents International",
       hours: "9:00am - 2:00pm",
       booth: "4A"
    },
    {  
       day: "Monday",
       location: "Pioneer Courthouse Square",
       hours: "10:00am - 2:00pm",
       booth: "7C"
    },
    {  
       day: "Tuesday",
       location: "Hillsboro",
       hours: "5:00pm - 8:30pm",
       booth: "1F"
    },
    {  
       day: "Wednesday",
       location: "Shemanski Park",
       hours: "10:00am - 2:00pm",
       booth: "3E"
    },
    {  
       day: "Thursday",
       location: "Northwest Portland",
       hours: "2:00pm - 6:00pm",
       booth: "6D"
    },
    {  
       day: "Saturday",
       location: "Beaverton",
       hours: "10:00am - 1:30pm",
       booth: "9G"
    }
   ];


  constructor(props) {
    super(props);
    this.state = {
      currentDay: null
    };
  }

  // handleLoad = () => {
  //   // const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  //   // this.setState({currentDay: 1});
  //   this.setState({currentDay: (new Date()).getDay()}, );
  // }

  handleLoad = () => {
    (this.setState(
      { currentDay: (new Date()).getDay() },
      () => console.log(this.state)
      )
  )}
  /*  setstate with callback function lets it act like you went to all the effort of making it async
  see: https://medium.learnreact.com/setstate-takes-a-callback-1f71ad5d2296
  */ 

  render() {
    this.handleLoad();
    return (
        <React.Fragment>
            {this.state.currentDay !== null && // Use conditional rendering with logical AND
                DateControl.marketSchedule[this.state.currentDay].location}
        </React.Fragment>
    );
  }
  /*
  using an if statement directly inside a JSX block is not allowed.
  we are using conditional rendering with a logical (&&) operator to render the component only if this.state.currentDay is not null. 
  see: https://react.dev/learn/conditional-rendering#logical-and-operator-
  */



}
