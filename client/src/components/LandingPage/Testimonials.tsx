import { Avatar, Rating } from '@mantine/core'
import React from 'react'
import avatar from '../../assets/avatar/avatar-8.png'
import { reviews } from '../../data'
const Testimonials = () => {
  return (
    <section className="mt-20 pb-5">
      <h2 className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What <span className="text-bright-sun-400">Users </span> says about us?
      </h2>
      <div className="flex justify-evenly">
        {
            reviews.map((review, index)=> <div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10">
            <div className="flex gap-2 items-center">
                <Avatar className='!h-14 !w-14' src={review.image} alt='yo...' />
                <div>
                    <h5 className="text-lg text-mine-shaft-100 font-semibold">{review.name}</h5>
                    <Rating value={review.rating} fractions={2} readOnly />
                </div>
            </div>
            <p className="text-xs text-mine-shaft-300 ">{review.review}</p>
          </div>)
        }
      </div>
      
      </section>
  )
}

export default Testimonials