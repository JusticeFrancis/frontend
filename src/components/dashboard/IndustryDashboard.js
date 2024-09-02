import React from 'react'
import Ads from '../../elements/Ads'
import Credits from '../../elements/Credits'
import Notifications from '../../elements/Notifications'
import ProjectList from '../../elements/ProjectList'
import SubmitAds from '../../elements/SubmitAds'

const IndustryDashboard = () => {
  return (
    <div className='lg:mx-[60px] mx-3 py-8 space-y-5'>
        <div className='font-bold text-[25px] '>Industry dashboard</div>

        <div className='grid lg:grid-cols-3  gap-6 '>
            <div className='lg:col-span-2'>
                <ProjectList/>
            </div>
            <div className='lg:col-span-1'>
                <Credits/>
            </div>
        </div>



        <div>
            <Notifications/>
        </div>


        <div>
            <Ads/>
        </div>

        <div>
            <SubmitAds/>
        </div>
    </div>
  )
}

export default IndustryDashboard