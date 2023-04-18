import React from "react";

export default class DateComponent extends React.Component {

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
       location: "Hollywood Farmers Market",
       hours: "8:00am - 1:30pm",
       booth: "9G"
    }
   ];


  constructor(props) {
    super(props);
    this.state = {
      shownDays: []
    };
  }

  handleClick = (event) => {
    this.setState(prevState => ({
      // shownDays: prevState.shownDays.push(event.target.value)
      shownDays: [...prevState.shownDays,(Number(event.target.value))]
    }));
  }

  resetState =() => {
    this.setState({shownDays: []})
  }

  render() {
    return (
      <React.Fragment>
        <ul>
        {DateComponent.marketSchedule.map((element, index) => {
          if(this.state.shownDays.includes(index)) {
            return (
              <React.Fragment>
                <li onClick={this.resetState}>{element.day}</li>
                <ul>
                  <li>Location: {element.location}</li>
                  <li>Hours: {element.hours}</li>
                  <li>Booth: {element.booth}</li>
                </ul>
            </React.Fragment>)
          } else {
            return (<li value={index} onClick={this.handleClick}>{element.day}</li>)
          }
          
        })}
        </ul>
      </React.Fragment>
    )
  }
}

// to have the window scroll to the top after render use this bit of code. 
// window.scrollTo(0, 0)
