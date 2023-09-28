
import React from "react";
import Carousel from "react-bootstrap/Carousel";

const captionStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  animation: "slideRightToLeft 1s ease-in-out", // Add the animation property
};

const textStyle = {
  textAlign: "center",
  color: "white", /* Customize the text color */
  backgroundColor: "rgba(0, 0, 0, 0)", /* Add a semi-transparent background for better readability */
  padding: "20px",
};

const inlineCSS = `
  @keyframes slideRightToLeft {
    0% {
      transform: translateX(100%); /* Start from the right */
    }
    100% {
      transform: translateX(0); /* End at the original position */
    }
  }
`;

function BootstrapCarousel() {
  return (
    <div className="container-fluid p-0">
      {/* Inline CSS */}
      <style>{inlineCSS}</style>

      <Carousel>
        <Carousel.Item style={{ maxHeight: "540px" }}>
          <a href="https://www.ibef.org/blogs/india-emerging-as-a-global-wellness-and-ayurveda-hub">
            <div className="carousel-content">
              <Carousel.Caption style={captionStyle}>
                <h3 className="animated-text" style={textStyle}>INDIA EMERGING AS A GLOBAL WELLNESS AND AYURVEDA HUB</h3>
              </Carousel.Caption>
            </div>
            <img
              className="d-block w-100 img-fluid"
              src="https://img.freepik.com/free-photo/variety-spices-are-cutting-board-with-green-vegetable-background_1340-23417.jpg?t=st=1694817002~exp=1694820602~hmac=f9b45d21e00bcfc9c76d862af48e91ef52cea092c0eed346b5838a3bf4ba5741&w=1060"
              alt="First Demo"
            />
          </a>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: "540px" }}>
          <a href="https://www.sciencedirect.com/science/article/pii/S0975947620300590">
            <div className="carousel-content">
              <img
                className="d-block w-100 img-fluid"
                src="https://wallpaperaccess.com/full/2996863.jpg"
                alt="Second Demo"
              />
              <Carousel.Caption style={captionStyle}>
                <h3 className="animated-text" style={{ color: "black", ...textStyle }}>Ayurveda: (W)here is the evidence</h3>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>

        <Carousel.Item style={{ maxHeight: "540px" }}>
          <a href="https://www.ijariit.com/manuscripts/v9i2/V9I2-1171.pdf#:~:text=The%20study%20employed%20a%20systematic%20review%20of%20existing,and%20Allopathy%20in%20the%20treatment%20of%20various%20diseases.">
            <div className="carousel-content">
              <img
                className="d-block w-100 img-fluid"
                src="https://th.bing.com/th/id/OIP.Vt9S1EZ-2vOcspeLI7uU8gHaEb?pid=ImgDet&rs=1"
                alt="Third Demo"
              />
              <Carousel.Caption style={captionStyle}>
                <h3 className="animated-text" style={{ color: "black", ...textStyle }}>A comparative overview of Ayurveda and Allopathy with special reference to efficiency and limitation</h3>
              </Carousel.Caption>
            </div>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BootstrapCarousel;
