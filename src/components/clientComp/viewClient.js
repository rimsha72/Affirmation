import React, { useState } from 'react'
import ProviderInformation from '../../layouts/providerInformation'
import Header from '../header/header'
// import VideoInto from '../../layouts/videoIntro'
import ConnectTeam from '../../layouts/connectTeam'
import ClientSubHeader from '../../layouts/client/clientSubHeader'
import ClientUserDetails from '../../layouts/client/clientUserDetails'
import ClientHealthProfile from '../../layouts/client/clientHealthProfile'
import ClientSupportRequests from '../../layouts/client/clientSupportRequests'
import ClientConnect from '../../layouts/client/clientConnect'
import ClientInsight from '../../layouts/client/clientInsight'
import ClientWellnessPlan from '../../layouts/client/clientWellnessPlan'
import ClientShare from '../../layouts/client/clientShare'
import UserInformation from '../../layouts/userInformation'

export default function ViewClient() {
    const [currentTab, setCurrentTab] = useState(1);
    return (
        <>
            {/* <Header header={"CLIENTS"} />
            <div className='px-9 lg:ml-64' style={{ marginTop: '-175px' }}>
                <div className='d-flex flex-row '>
                    <div className='flex flex-row flex-wrap'>
                        <UserInformation />
                        <ConnectTeam />
                    </div>
                </div>
            </div>
            <ClientSubHeader setCurrentTab={setCurrentTab} />
            {currentTab === 1 && <ClientUserDetails />}
            {currentTab === 2 && <ClientHealthProfile />}
            {currentTab === 3 && <ClientSupportRequests />}
            {currentTab === 4 && <ClientConnect />}
            {currentTab === 5 && <ClientInsight />}
            {currentTab === 6 && <ClientWellnessPlan />}
            {currentTab === 7 && <ClientShare />} */}
        </>
    )
}
