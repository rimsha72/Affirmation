import React from 'react'
import Header from '../../components/header/header'
import ViewSupportComp from '../../components/support/viewSupportComp'

export default function ViewSupport() {
    return (
        <>
            <Header header={"support requests"} />
            <div className='px-9 lg:ml-64'>
                <ViewSupportComp />
            </div>
        </>
    )
}
