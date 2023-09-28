import React, { useState } from "react";
import ImageUpload from "../Components/ImageUpload";
import Button from "react-bootstrap/Button";
import "../Components/Reference.css";
import { useNavigate } from "react-router-dom";
import Chatgpt from "../Components/chatGptUI";
import Voicegpt from "../Components/Voicegpt";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Navbar from "../Components/Navbar";
import axios from "axios";

function Reference() {
  const navigate = useNavigate();

  const [SurData, setSurData] = useState([]);
  // const [searchType, setSearchType] = useState('medicineName');
  // const handleSearchTypeChange = (e) => {
  //   setSearchType(e.target.value);
  // };

  const handleClick = () => {
    navigate("/room_front");
  };

  const handleLoad = async () => {
    // alert("Loading...");
    // console.log(localStorage.getItem('username'));

    const u_name = localStorage.getItem("username");
    try {
      const res = await axios.post("http://localhost:8000/api/userSurveyData", {
        username: u_name,
      });

      // Replace line breaks with HTML line breaks for formatting
      // const formattedResponse = res.data.replace(/\n/g, '<br/>');
      // console.log(formattedResponse);
      // setResponse(formattedResponse);
      SurData.push({ name: u_name });
      SurData.push({ Age: res.data.surveyData.Age });
      SurData.push({ ongoing_prescrip: res.data.surveyData.ongoing_prescrip });

      // console.log(res.data);
      // console.log(res.data.surveyData.ongoing_prescrip);
      console.log(SurData[1]);
      setSurData([...SurData]);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      Expert Assistance
    </Tooltip>
  );

  return (
    <div style={{backgroundColor:"#f5f5dca3",paddingBottom: "1px"}}>
      <Navbar />

      <div className="container" onLoad={handleLoad} style={{marginBottom: "131px"}}>
        <Chatgpt />
        <div className="fixed-chat-icon2">
          <OverlayTrigger
            placement="top"
            color="success"
            overlay={renderTooltip}
            delay={{ show: 250, hide: 400 }}
          >
            <Button
              variant="outline-info"
              onClick={handleClick}
              className="chat-icon-btn2 p-0"
            >
              <svg
                style={{
                  height: "26px",
                  marginBottom: "6px",
                  fill: "currentColor",
                }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#1546a8"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M7.95565 2.52362C8.91749 2.25663 10.2982 1.99365 12.0011 1.99608C13.7028 1.99851 15.0824 2.26132 16.0435 2.52686C16.5241 2.65966 16.9007 2.79331 17.1613 2.89586C17.2917 2.94715 17.3931 2.9907 17.4642 3.02254C17.4998 3.03847 17.5278 3.05147 17.548 3.06105L17.5725 3.07281L17.5803 3.07665L17.5831 3.07804L17.5843 3.0786C17.5845 3.07871 17.5852 3.07907 17.25 3.74999L17.5852 3.07907C17.9558 3.2642 18.1061 3.71466 17.9209 4.0852C17.7361 4.45515 17.2868 4.60556 16.9166 4.42179C16.9163 4.42164 16.9155 4.42125 16.9152 4.42111L16.9055 4.41647C16.8948 4.41142 16.8767 4.40295 16.8512 4.39154C16.8002 4.36872 16.72 4.33417 16.6121 4.2917C16.3962 4.20674 16.0696 4.09028 15.644 3.97269C14.7926 3.73743 13.5472 3.49829 11.9989 3.49608C10.4518 3.49387 9.20751 3.73284 8.35685 3.96897C7.93162 4.08701 7.60538 4.20416 7.38972 4.28967C7.28192 4.33241 7.20187 4.3672 7.15101 4.39017C7.12559 4.40165 7.10748 4.41018 7.09686 4.41525L7.08658 4.42022C6.71681 4.60642 6.26677 4.4574 6.08033 4.08768C5.89382 3.71783 6.04245 3.26682 6.4123 3.08031L6.75 3.74999C6.4123 3.08031 6.41207 3.08043 6.4123 3.08031L6.41439 3.07927L6.41722 3.07785L6.42509 3.07396L6.44965 3.06207C6.46991 3.05237 6.49795 3.03923 6.53356 3.02315C6.60477 2.99098 6.70636 2.94701 6.83684 2.89528C7.09774 2.79183 7.47464 2.65714 7.95565 2.52362Z"
                    fill="#07209c"
                  ></path>{" "}
                  <path
                    d="M6.75 20.25C6.41584 20.9214 6.41628 20.9217 6.41628 20.9217L6.4179 20.9225L6.42071 20.9239L6.42854 20.9277L6.45302 20.9394C6.47323 20.9489 6.5012 20.9619 6.53675 20.9777C6.60784 21.0094 6.70928 21.0528 6.83961 21.1039C7.10019 21.206 7.47669 21.3391 7.95723 21.4714C8.91812 21.7358 10.2975 21.9976 11.9989 22C13.7015 22.0024 15.082 21.7405 16.0436 21.4746C16.5246 21.3416 16.9014 21.2075 17.1622 21.1045C17.2927 21.0529 17.3943 21.0092 17.4654 20.9771C17.501 20.9611 17.5291 20.948 17.5493 20.9384L17.5739 20.9265L17.5817 20.9226L17.5846 20.9212L17.5857 20.9207C17.5857 20.9207 17.5867 20.9202 17.25 20.25L17.5867 20.9202C17.9568 20.7343 18.1061 20.2835 17.9202 19.9133C17.7343 19.5433 17.2838 19.394 16.9138 19.5796L16.9042 19.5842C16.8935 19.5893 16.8754 19.5978 16.85 19.6092C16.7991 19.6321 16.719 19.6668 16.6112 19.7093C16.3955 19.7945 16.0692 19.9113 15.6439 20.0289C14.793 20.2641 13.5485 20.5022 12.0011 20.5C10.4525 20.4978 9.20688 20.2595 8.35527 20.0251C7.92956 19.908 7.60294 19.792 7.38695 19.7073C7.279 19.665 7.1988 19.6306 7.14782 19.6078C7.12233 19.5965 7.10416 19.588 7.09349 19.583L7.08376 19.5784C6.71301 19.3941 6.26304 19.5451 6.07856 19.9158C5.894 20.2867 6.04546 20.7371 6.41628 20.9217L6.75 20.25Z"
                    fill="#07209c"
                  ></path>{" "}
                  <path
                    d="M6.25 6.49999C5.00736 6.49999 4 7.50735 4 8.74999V15.25C4 16.4926 5.00736 17.5 6.25 17.5H12.75C13.9926 17.5 15 16.4926 15 15.25V8.74999C15 7.50735 13.9926 6.49999 12.75 6.49999H6.25Z"
                    fill="#07209c"
                  ></path>{" "}
                  <path
                    d="M19.2699 16.3262L16 13.6013V10.4L19.2702 7.67818C19.4938 7.49207 19.8049 7.45206 20.0683 7.57554C20.3317 7.69902 20.5 7.96371 20.5 8.25464V15.75C20.5 16.041 20.3317 16.3057 20.0681 16.4292C19.8046 16.5526 19.4934 16.5125 19.2699 16.3262Z"
                    fill="#07209c"
                  ></path>{" "}
                </g>
              </svg>
              {/* <svg style={{ height: "26px", marginBottom: "6px", fill: "currentColor" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" /></svg> */}
            </Button>
          </OverlayTrigger>
        </div>
        <div class="row text-center">
          <table class="table caption-top">
            <caption className="col-8">Your Survey details:</caption>

            <tbody>
              <tr>
                <td>Name</td>
                <td>Age</td>
                <td>Dietary</td>
                <td>Ongoing Prescription</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <p> {SurData[0] && SurData[0].name}</p>{" "}
                </td>
                <td>
                  <p> {SurData[1] && SurData[1].Age} </p>{" "}
                </td>
                <td>Jain</td>
                <td>
                  <p> {SurData[2] && SurData[2].ongoing_prescrip} </p>{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ImageUpload age={SurData[1] && SurData[1].Age} ongPresc={SurData[2] && SurData[2].ongoing_prescrip} />

        <Voicegpt />
      </div>
    </div>
  );
}

export default Reference;
