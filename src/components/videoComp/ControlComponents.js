import { useNavigate } from "react-router-dom";
import { FiPhone } from 'react-icons/fi'
import { useClient } from "./config";
import { useState } from "react";
import { BsCameraVideoFill, BsFillCameraVideoOffFill, BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
// import { useClient, useStart, useUsers } from "../../context/VideoContext";


export default function ControlComponents(props) {

  const navigate = useNavigate();

  const client = useClient();
  const { tracks, setStart, setLaunch } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });

  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => {
        return { ...ps, audio: !ps.audio };
      });
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => {
        return { ...ps, video: !ps.video };
      });
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setLaunch(false);
    navigate('/');
  };

  // const navigate = useNavigate();
  // const rtc = useClient();
  // const [users, setUsers] = useUsers();
  // const [start, setStart] = useStart();
  // const leaveChannel = async () => {
  //   // Destroy the local audio and video tracks.
  //   await rtc.current.localAudioTrack.close();
  //   await rtc.current.localVideoTrack.close();
  //   await rtc.current.client.leave();
  //   setUsers([])
  //   setStart(false);
  //   navigate('/');
  // }
  // const mute = (e, type, id) => {
  //   console.log(type, id)
  //   if (type === 'audio') {
  //     setUsers(prevUsers => {
  //       return (prevUsers.map((user) => {
  //         if (user.uid === id) {
  //           user.client && rtc.current.localAudioTrack.setEnabled(!user.audio)
  //           return { ...user, audio: !user.audio }
  //         }
  //         return user
  //       }))
  //     })
  //     // setRender(Math.floor(Math.random() * 10))
  //   }
  //   else if (type === 'video') {
  //     setUsers(prevUsers => {
  //       return prevUsers.map((user) => {
  //         if (user.uid === id) {
  //           user.client && rtc.current.localVideoTrack.setEnabled(!user.video)
  //           return { ...user, video: !user.video }
  //         }
  //         return user
  //       })
  //     })
  //     // setRender(Math.floor(Math.random() * 10))
  //   }
  // }
  return (
    <div className="w-full">
      <div className="flex justify-start items-center space-x-4">
        <div className="rounded-full flex justify-center items-center p-3 bg-blue-500 text-white cursor-pointer" onClick={() => mute("video")}>
          <button >
            {trackState.video ?
              <BsCameraVideoFill />
              :
              <BsFillCameraVideoOffFill />
            }
          </button>
        </div>
        <div className="rounded-full flex justify-center items-center p-3 bg-blue-500 text-white cursor-pointer" onClick={() => mute("audio")}>
          <button >
            {
              trackState.audio ?
                <BsFillMicFill />
                :
                <BsFillMicMuteFill />
            }
          </button>
        </div>

        <div className="rounded-full flex justify-center items-center p-3 bg-red-500 cursor-pointer" onClick={() => leaveChannel()}>
          <FiPhone className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  )
}
