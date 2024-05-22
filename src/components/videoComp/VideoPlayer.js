import { useEffect, useRef, useState } from 'react';
import { AgoraVideoPlayer } from "agora-rtc-react";
import ControlComponents from './ControlComponents';
import { useUsers } from '../../context/VideoContext';

export default function VideoPlayer(props) {

  const { users, tracks } = props;
  const [gridSpacing, setGridSpacing] = useState(12);

  useEffect(() => {
    setGridSpacing(Math.max(Math.floor(12 / (users.length + 1)), 4));
  }, [users, tracks]);

  // const ref = useRef();
  // console.log(user)
  // const playVideo = () => {
  //   console.log(
  //     'video is playing'
  //   )
  //   user.videoTrack.play(ref.current)
  // }
  // const stopVideo = () => {
  //   console.log('video is sttoped.')
  //   user.videoTrack.stop()
  // }

  // useEffect(() => {
  //   playVideo();
  //   setUserId(user.uid)
  //   return () => {
  //     stopVideo();
  //   }
  // }, [render]);

  return (
    <>
      <div className={``} style={{ height: "100%", width: "100%" }}>
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className={``} style={{ height: "100%", width: "100%" }}>
        {
          users.length > 0 &&
          users.map((user) => {
            if (user.videoTrack) {
              return (
                <div style={{ height: "100%", width: "100%" }}>
                  <AgoraVideoPlayer
                    videoTrack={user.videoTrack}
                    key={user.uid}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              );
            } else return null;
          })
        }
      </div>
    </>
  )
}
