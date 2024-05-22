import { useEffect, useId, useRef, useState } from 'react';
import {
  config,
  useClient,
  useMicrophoneAndCameraTracks,
  channelName,
} from "./config";
import AgoraRTC from 'agora-rtc-sdk-ng';
import VideoPlayer from './VideoPlayer';
// import { useClient, useStart, useUsers } from '../../context/VideoContext';
import ControlComponents from './ControlComponents';

export default function VideoRoom({ setLaunch }) {
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  let init = async (name) => {
    client.on("user-published", async (user, mediaType) => {
      await client.subscribe(user, mediaType);
      if (mediaType === "video") {
        setUsers((prevUsers) => {
          return [...prevUsers, user];
        });
      }
      if (mediaType === "audio") {
        user.audioTrack.play();
      }
    });

    client.on("user-unpublished", (user, mediaType) => {
      if (mediaType === "audio") {
        if (user.audioTrack) user.audioTrack.stop();
      }
      if (mediaType === "video") {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      }
    });

    client.on("user-left", (user) => {
      setUsers((prevUsers) => {
        return prevUsers.filter((User) => User.uid !== user.uid);
      });
    });

    try {
      await client.join(config.appId, name, config.token, null);
    } catch (error) {
      console.log("error");
    }

    if (tracks) await client.publish([tracks[0], tracks[1]]);
    setStart(true);
  };

  // const APP_ID = 'fd2d20454085471fbfcc6312b24885ee';
  // const TOKEN =
  //   '007eJxTYKjb/TzcwXJiAv/56eGtYd9jrshkPS82bOu6bebyoud5X74CQ1qKUYqRgYmpiYGFqYm5YVpSWnKymbGhUZKRiYWFaWqqsMPzlIZARoZrL6eyMjJAIIjPyhCWmZOTyMAAAKtzIOk=';
  // const CHANNEL = 'Villa';

  // const [localTracks, setLocalTracks] = useState([]);

  // const rtc = useClient();
  // const [users, setUsers] = useUsers();
  // const [start, setStart] = useStart();
  const [userId, setUserId] = useState();
  const [render, setRender] = useState(null);
  const initialized = useRef(false);

  // console.log(rtc, users, start)

  // let init = async (name) => {
  //   rtc.current.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
  //   initClientEvents()
  //   const uid = await rtc.current.client.join(APP_ID, CHANNEL, TOKEN, null);
  //   // Create an audio track from the audio sampled by a microphone.
  //   rtc.current.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  //   // Create a video track from the video captured by a camera.
  //   rtc.current.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
  //   //Adding a User to the Users State
  //   setUsers((prevUsers) => {
  //     return [...prevUsers, { uid: uid, audio: true, video: true, client: true, videoTrack: rtc.current.localVideoTrack }]
  //   })
  //   //Publishing your Streams
  //   await rtc.current.client.publish([rtc.current.localAudioTrack, rtc.current.localVideoTrack]);
  //   setStart(true)
  // }

  // const initClientEvents = () => {
  //   rtc.current.client.on("user-published", async (user, mediaType) => {
  //     // New User Enters
  //     await rtc.current.client.subscribe(user, mediaType);
  //     if (mediaType == "video") {
  //       const remoteVideoTrack = user.videoTrack;
  //       setUsers((prevUsers) => {
  //         return [...prevUsers, { uid: user.uid, audio: user.hasAudio, video: user.hasVideo, client: false, videoTrack: remoteVideoTrack }]
  //       })
  //     }

  //     if (mediaType == "audio") {
  //       const remoteAudioTrack = user.audioTrack;
  //       remoteAudioTrack.play();
  //       setUsers((prevUsers) => {
  //         return (prevUsers.map((User) => {
  //           if (User.uid === user.uid) {
  //             return { ...User, audio: user.hasAudio }
  //           }
  //           return User
  //         }))
  //       })
  //     }
  //   });

  //   rtc.current.client.on("user-unpublished", (user, type) => {
  //     //User Leaves
  //     if (type === 'audio') {
  //       // if(())
  //       setUsers(prevUsers => {
  //         return (prevUsers.map((User) => {
  //           if (User.uid === user.uid) {
  //             return { ...User, audio: !User.audio }
  //           }
  //           return User
  //         }))
  //       })
  //     }
  //     if (type === 'video') {
  //       setUsers((prevUsers) => {
  //         return prevUsers.filter(User => User.uid !== user.uid)
  //       })
  //     }
  //   });
  // }

  // const client = AgoraRTC.createClient({
  //   mode: 'rtc',
  //   codec: 'vp8',`
  // });

  // const [users, setUsers] = useState([]);

  // const handleUserJoined = async (user, mediaType) => {
  //   console.log('user connected: ', user)
  //   await client.subscribe(user, mediaType);

  //   if (mediaType === 'video') {
  //     setUsers((previousUsers) => [...previousUsers, user]);
  //   }

  //   if (mediaType === 'audio') {
  //     user.audioTrack.play()
  //   }
  // };

  // const handleUserLeft = (user) => {
  //   setUsers((previousUsers) =>
  //     previousUsers.filter((u) => u.uid !== user.uid)
  //   );
  // };

  useEffect(() => {
    console.log(ready, tracks)
    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }

    }
    // client.on('user-published', handleUserJoined);
    // client.on('user-left', handleUserLeft);

    // client
    //   .join(APP_ID, CHANNEL, TOKEN, null)
    //   .then((uid) =>
    //     Promise.all([
    //       AgoraRTC.createMicrophoneAndCameraTracks(),
    //       uid,
    //     ])
    //   )
    //   .then(([tracks, uid]) => {
    //     const [audioTrack, videoTrack] = tracks;
    //     console.log('track is: ......', tracks, audioTrack, videoTrack)
    //     setLocalTracks(tracks);
    //     setUsers((previousUsers) => [
    //       ...previousUsers,
    //       {
    //         uid,
    //         videoTrack,
    //         audioTrack,
    //       },
    //     ]);
    //     client.publish(tracks);
    //   });


    // return () => {
    //   for (let localTrack of localTracks) {
    //     localTrack.stop();
    //     localTrack.close();
    //   }
    //   client.off('user-published', init);
    //   client.off('user-left', handleUserLeft);
    //   client.unpublish(localTracks).then(() => client.leave());
    // };

  }, [channelName, client, ready, tracks]);
  return (
    <>
      {/* <div className='grid'>

      </div> */}

      <div className='relative max-w-screen-2xl' style={{ height: '100%' }} >
        <div className='w-full max-w-screen-2xl' style={{ height: '7%' }}>
          {ready && tracks && (
            <ControlComponents tracks={tracks} setStart={setStart} setLaunch={setLaunch} />
          )}
        </div>
        <div className='grid grid-cols-2 gap-4' style={{ height: '95%' }}>
          {start && tracks &&
            <VideoPlayer tracks={tracks} users={users} />
          }
        </div>

      </div>
    </>
  )
}
