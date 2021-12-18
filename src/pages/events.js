import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import Footer from "../components/footer";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
const API_KEY = "AIzaSyCK_DDTb2oIpDRt51KQJYv_jmt3vkUMC2g";
var size = "1rem";
if (window.matchMedia("(max-width: 400px)").matches) {
  size = ".2em";
}
if (window.matchMedia("(min-width: 400px)").matches) {
  size = ".3em";
}
if (window.matchMedia("(min-width: 700px) ").matches) {
  size = ".50em";
}
if (window.matchMedia("(min-width: 1000px) ").matches) {
  size = ".7em";
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
    marginLeft: "10%",
    marginRight: "10%",
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
var color = "white";
export default class Example extends React.Component {
  render() {
    return (
      <div
        className="scrollbar scrollbar-primary"
        style={{
          backgroundColor: "#2b2828",
          minHeight: "100vh",
          marginBottom: "100px",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <DeviceOrientation lockOrientation={"landscape"}>
          <Orientation orientation="landscape" alwaysRender={false}>
            <Calendar
              apiKey={API_KEY}
              styles={styles}
              calendars={calendars}
              showFooter={false}
            />
          </Orientation>
          <Orientation orientation="portrait" alwaysRender={false}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1em",
                color: color,
              }}
            >
              <p>Please rotate your device</p>
            </div>
          </Orientation>
        </DeviceOrientation>

        <Footer> </Footer>
      </div>
    );
  }
}
