import React, { useState } from 'react'
import VideoCallHeader from '../components/videoComp/VideoCallHeader'
import VideoRoom from '../components/videoComp/VideoRoom';

export default function Video() {
  const [launch, setLaunch] = useState(null);
  return (
    <div className='' style={{ height: '80vh' }}>
      <VideoCallHeader />
      <div className='p-8 h-screen' style={{ height: '100%' }}>
        {launch ?
          <div style={{ height: "100%", width: "100%" }}>
            <VideoRoom setLaunch={setLaunch} />
          </div>
          :
          <button onClick={e => setLaunch(true)} className='px-6 py-2 bg-blue-750 text-white rounded-lg'>Join Meeting</button>
        }
      </div>
    </div>
  )
}
