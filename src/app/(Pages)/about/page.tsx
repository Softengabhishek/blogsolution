import React from 'react'

const page = () => {
  return (
<div className="py-1">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src="/devloper.png"/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl  font-bold md:text-4xl">About me</h2>
          <p className="mt-6 text-gray-600">I&apos;m Abhishek Gupta, a passionate full-stack MERN developer dedicated to creating innovative web and mobile solutions.</p>
          <p className="mt-4 text-gray-600"> With expertise in both frontend and backend technologies, I specialize in building scalable, user-friendly applications. Outside work, I enjoy sharing knowledge through my tech blog and YouTube channel.</p>
        </div>
      </div>
  </div>
</div>
  )
}

export default page