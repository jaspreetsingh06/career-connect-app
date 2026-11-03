import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { jobCards } from '../data/jobs'

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <div className='flex flex-col md:flex-row gap-8 md:gap-10 px-4 md:px-20 pt-8 md:pt-14'>
        <div className='w-full md:w-1/2'>
          <h1 className='font-bold text-3xl sm:text-5xl'>Find Your Dream Job</h1>
          <p className='pt-5 font-semibold max-w-lg text-gray-600'>
            Discover jobs from top companies and apply in minutes.
          </p>
        </div>

        <div className='w-full md:w-1/2'>
          <div className='flex items-center gap-2'>
            <input
              className='border-2 py-3 px-5 w-full rounded-2xl outline-0 border-gray-600'
              type='text'
              placeholder='Search jobs, skills...'
            />
            <Link
              to='/jobs'
              className='bg-[#020617] text-white px-4 py-3 whitespace-nowrap font-semibold rounded-2xl active:scale-95'
            >
              Browse Jobs
            </Link>
          </div>

          <div className='font-bold text-[#033341] pt-8 text-lg sm:text-xl'>
            <h3>10,000+ Jobs</h3>
            <h3>500+ Companies</h3>
            <h3>2000+ Candidates Hired</h3>
          </div>
        </div>
      </div>

      {/* Featured Jobs */}
      <section>
        <h1 className='font-bold text-2xl sm:text-3xl px-4 md:px-20 pt-10'>Featured Jobs</h1>
        <div className='flex flex-wrap gap-6 md:gap-4 justify-center md:justify-start px-4 md:px-20 py-10'>
          {jobCards.map((elem) => (
            <Card
              key={elem.id}
              id={elem.id}
              logo={elem.logo}
              company={elem.companyName}
              time={elem.time}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home