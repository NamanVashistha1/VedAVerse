import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

function Room() {
    const {roomID} = useParams();
    const myMeeting = async (element) =>{
        const appID = 1719434705;
      const serverSecret = " ";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "patient"); //patient ki jagah username aana chahiye
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Share link',
            // http://localhost:3000/Health-Plus/room/naman
            url:`http://localhost:3000/Health-Plus/room/${roomID}`
          },
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },

        });
  
      }
    return (
      <div ref={myMeeting}>Room</div>
    )
  }
  
  export default Room;