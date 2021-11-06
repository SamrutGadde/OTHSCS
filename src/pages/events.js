import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import Footer from "../components/footer";
const API_KEY = "AIzaSyCK_DDTb2oIpDRt51KQJYv_jmt3vkUMC2g";
let calendars = [
  { calendarId: "adeeb5412@gmail.com" },
  {
    calendarId: "adeeb5412@gmail.com",
    color: "#B241D1",
  },
];
let styles = {
  //you can use object styles (no import required)
  calendar: {
    backgroundColor: "#1E1E1E",
    color: "white",
  },

  //you can also use emotion's string styles
  today: {
    color: "#4285F4",
  },
};
export default class Example extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#1E1E1E",
          minHeight: "100vh",
          marginBottom: "100px",
        }}
      >
        <Calendar apiKey={API_KEY} styles={styles} calendars={calendars} />
        <Footer> </Footer>
      </div>
    );
  }
}
