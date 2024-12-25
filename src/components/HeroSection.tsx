import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section
      className="relative bg-[url(/techbg.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="absolute inset-0  sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your

            <strong className="block font-extrabold text-rose-700"> Perfect Blog </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Get all treding tech stack blogs including MERN, Kubernetes and Docker
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="/blogs"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection