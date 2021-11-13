import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import Footer from "../components/footer";
const API_KEY = "AIzaSyCK_DDTb2oIpDRt51KQJYv_jmt3vkUMC2g";
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
  },

  today: {
    color: "#4285F4",
  },
  eventText: {
    color: "white",
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
