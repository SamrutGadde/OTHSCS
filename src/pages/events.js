import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import Footer from "../components/footer";
import '../components/scrollbar.css'
const API_KEY = "AIzaSyCK_DDTb2oIpDRt51KQJYv_jmt3vkUMC2g";
var size = "1rem";
if (window.matchMedia("(max-width: 400px)").matches) {
  size = ".2em";
}
if (window.matchMedia("(min-width: 400px)").matches) {
  size = ".3em";
}
if (window.matchMedia("(min-width: 700px) ").matches) {
  size = ".80em";
}
if (window.matchMedia("(min-width: 1000px) ").matches) {
  size = "1em";
}
let calendars = [
  {
    calendarId: "adeeb5412@gmail.com",
    color: "#B241D1",
  },
];
let styles = {
  calendar: {
    backgroundColor: "#1E1E1E",
    color: "white",
    flex: 2,
    marginLeft:'10%',
    marginRight:'10%',
    
  },

  today: {
    color: "#4285F4",
  },
  eventText: {
    color: "white",
    fontSize: size,
  },
  multiEvent: {
    color: "white",
    fontSize: size,
  },
};

export default class Example extends React.Component {
  render() {
    return (
      <div
        className="scrollbar scrollbar-primary"
        style={{
          backgroundColor: "#2b2828",
          minHeight: "100vh",
          marginBottom: "100px",
          alignItems:'center',
          justifyContent:'center',
          paddingTop:'5%',
        }}
      >
          <Calendar 
            apiKey={API_KEY}
            styles={styles}
            calendars={calendars}
            showFooter={false}
          />
        <Footer> </Footer>
      </div>
    );
  }
}
