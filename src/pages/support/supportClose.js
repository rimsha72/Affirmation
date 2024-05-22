import React from 'react'
import Header from '../../components/header/header'
import SupportCloseComp from '../../components/support/supportCloseComp'

export default function SupportClose() {
    return (
        <>
            <Header header={'support requests'} />
            <div className='px-9 lg:ml-64'>
                <SupportCloseComp />
            </div>
        </>
    )
}
