import React from 'react'
import ViewSupportCloseComp from '../../components/support/viewSupportCloseComp'
import Header from '../../components/header/header'

export default function ViewSupportClose() {
    return (
        <>
            <Header header={'support requests'} />
            <div className='px-9 lg:ml-64'>
                <ViewSupportCloseComp />
            </div>
        </>
    )
}
