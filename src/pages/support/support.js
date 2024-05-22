import React from 'react'
import Header from '../../components/header/header'
import SupportComp from '../../components/support/supportComp'

export default function Support() {
    return (
        <>
            <Header header={'support requests'} />
            <div className='px-4 sm:px-9 lg:ml-64'>
                <SupportComp />
            </div>
        </>
    )
}
