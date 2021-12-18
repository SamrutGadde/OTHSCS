import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
import davidTeach from "../pictures/DavidTeaching2.JPG";
import clements from "../pictures/IMG_0799.jpg";
import board from "../pictures/IMG_2986.JPG";
import sevenlakes from "../pictures/IMG_3036.JPG";
import samWin from "../pictures/IMG_2175.jpg";
export default function App() {
  return (
    <MDBCarousel showIndicators fade interval={5000}>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement src={davidTeach} alt="..." />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={clements} alt="..." />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={board} alt="..." />
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={sevenlakes} alt="..." />
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={samWin} alt="..." />
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
