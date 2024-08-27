import React from 'react'
import girlImage from '../../assets/girl-working.png'
import avatar from '../../assets/avatar/avatar-7.png'
import { workingPoints } from '../../data'
import { Avatar } from '@mantine/core'
const Working = () => {
  return (
    <section className="mt-20 pb-5">
      <h2 className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it <span className="text-bright-sun-400">Works</span>
      </h2>

      <p className="text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate through the process and land your dream job
      </p>
      <div className="flex px-16 justify-between items-center">
        <div className="relative">
            <img src={girlImage} className='w-[30rem]' alt="girl working" />
            <div className="w-36 flex top-[15%] right-0 absolute flex-col items-center gap-1 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md">
              <Avatar className='!h-16 !w-16' src={avatar} alt='ite me' />
              <div className="text-sm font-semibold text-mine-shaft-200 text-center">Complete your profile</div>
              <div className="text-xs text-mine-shaft-300">70% Completed</div>
            </div>
        </div>
        <div className="flex flex-col gap-10">
          {
            workingPoints.map((work, index)=> <div key={index} className="flex items-center gap-4">
            <div className="p-2.5 bg-bright-sun-300 rounded-full">
                {work.icon}
            </div>
            <div className="">
              <div className="text-mine-shaft-200 text-xl font-semibold">{work.title}</div>
              <div className="text-mine-shaft-300">{work.desc}</div>
            </div>
        </div>)
          }
            
        </div>
      </div>
      </section>
  )
}

export default Working