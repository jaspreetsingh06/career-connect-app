import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { jobCards } from '../data/jobs'


const JobDetails = () => {
  const { id } = useParams()
  const job = jobCards.find((job) => job.id === Number(id))
  if (!job) return <div className='p-6'>
      <Link className='text-sm' to='/jobs'>← Back to Jobs</Link>
      <h1>Job not found</h1>
    </div>

  return (
    <div className='max-w-3xl  flex flex-col gap-5 bg-white shadow-2xl rounded-3xl p-8 mt-10 mx-4 sm:mx-auto'>
      <Link className='text-sm' to='/jobs'>← Back to Jobs</Link>
      <header className='flex items-center gap-4'>
        {job.logo ? (<img className='w-12 h-12 object-cover rounded-full' src={job.logo} alt="" />) : <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold'>
          {job.companyName[0]}
        </div>}
        <div>
          <h1 className='font-bold text-xl'>{job.post}</h1>
          <p>{job.companyName}</p>
        </div>
      </header>

      <div className='flex gap-2'>
        <span className='bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold'>{job.tag1}</span>
        <span className='bg-gray-200 px-3 py-1 rounded-full text-xs font-semibold'>{job.tag2}</span>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-3 my-5 gap-3' >
        <div className='bg-gray-100 rounded-xl p-3'>
          <h2 className='font-semibold'>Location</h2>
          <p>{job.location}</p>
        </div>
        <div className='bg-gray-100 rounded-xl p-3'>
          <h2 className='font-semibold'>Experience</h2>
          <p>{job.experience}</p>
        </div>
        <div className='bg-gray-100 rounded-xl p-3'>
          <h2 className='font-semibold'>Pay</h2>
          <p>{job.pay}</p>
        </div>
      </section>

      <section>
        <h2 className='font-semibold'>About the job</h2>
        <p>We are looking for a {job.post} to join {job.companyName}. This is a {job.tag1} role based in {job.location}.</p>
      </section>

      <footer className='text-center'>
        <button className='bg-black text-white text-sm rounded-xl px-4 py-2 font-semibold cursor-pointer'>Apply Now</button>
      </footer>

    </div>

  )
}

export default JobDetails