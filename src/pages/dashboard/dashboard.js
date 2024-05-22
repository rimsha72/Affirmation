import React from 'react'
import Header from '../../components/header/header'
import ProviderInformation from '../../layouts/providerInformation'
import VideoInto from '../../layouts/videoIntro'

export default function Dashboard() {
  return (
    <div>
      <Header header={'Personal Information'} />
      <div className='px-9 lg:ml-64' style={{ marginTop: '-175px' }}>
        <div className='d-flex flex-row '>
          <div className='flex flex-row flex-wrap'>
            <ProviderInformation />
            <VideoInto />
          </div>
        </div>
      </div>
    </div>
  )
}
