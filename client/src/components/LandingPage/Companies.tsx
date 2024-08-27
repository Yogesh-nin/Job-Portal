import React from 'react'
import Marquee from 'react-fast-marquee'
import { companies } from '../../data'


const Companies = () => {
  return (
    <section className='mt-20 pb-5'>
        <h2 className="text-4xl text-center font-semibold mb-10 text-mine-shaft-100">Trusted By <span className='text-bright-sun-400'>1000+</span> companies</h2>

        <Marquee pauseOnHover>
            {
                companies.map((company) => <div className='mx-8 px-2 py-1 hover:bg-mine-shaft-900 rounded-xl cursor-pointer'>
                    <img className='h-14' src={company.image} alt="" />
                </div>)
            }
        </Marquee>
    </section>
  )
}

export default Companies