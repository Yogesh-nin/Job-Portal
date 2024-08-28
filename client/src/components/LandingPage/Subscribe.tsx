import { Button, TextInput } from '@mantine/core'
import React from 'react'

const Subscribe = () => {
  return (
    <section className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-evenly">
      <h2 className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100">
      Never Wants To Miss Any <br/> <span className="text-bright-sun-400"> Job News</span>
      </h2>
      <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
        <TextInput
          className='[&_input]:text-mine-shaft-100 font-semibold'
          variant='unstyled'
          placeholder='yourname@gmail.com'
          size='xl'
         />
         <Button className='!rounded-lg' size='lg' color='brightSun.4' variant='filled'>Subscribe</Button>
      </div>
      </section>
  )
}

export default Subscribe