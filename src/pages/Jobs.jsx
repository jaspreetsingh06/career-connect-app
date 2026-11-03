import React, { useState } from 'react'
import Card from '../components/Card'
import { jobCards } from '../data/jobs'

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("ALL");
  const [experienceCat, setExperience] = useState("ALL")

  const typesOfJob = ['ALL', 'Full-time', 'Part-time', 'Internship', 'Remote']
  const exp = ['ALL', 'Fresher', '1-3 yrs', '3+ yrs']

  const filteredJobs = jobCards.filter((job) =>
    (job.post.toLowerCase().includes(search.toLowerCase()) || job.companyName.toLowerCase().includes(search.toLowerCase())) &&
    (jobType === "ALL" || job.tag1 === jobType) &&
    (experienceCat === "ALL" || job.experience === experienceCat)
  )

  const chipBase = 'px-3 py-1 rounded-full text-sm cursor-pointer '
  const chipOn = chipBase + 'bg-black text-white'
  const chipOff = chipBase + 'bg-gray-100'

  return (
    <div className='flex flex-col md:flex-row gap-5 p-4 md:h-[calc(100vh-80px)] md:overflow-hidden'>

      {/* Sidebar */}
      <div className='w-full md:w-70 md:min-w-64  md:self-start  bg-white shadow-2xl rounded-2xl'>
        <div className='p-5 flex flex-col gap-4'>
          <div>
            <h3 className='uppercase font-semibold pb-2'>Job type</h3>
            <div className='flex flex-wrap gap-2'>
              {typesOfJob.map((elem) => (
                <p key={elem} onClick={() => setJobType(elem)} className={jobType === elem ? chipOn : chipOff}>{elem}</p>
              ))}
            </div>
          </div>

          <div className='border-t pt-4'>
            <h3 className='uppercase font-semibold pb-2'>Experience</h3>
            <div className='flex flex-wrap gap-2'>
              {exp.map((elem) => (
                <p key={elem} onClick={() => setExperience(elem)} className={experienceCat === elem ? chipOn : chipOff}>{elem}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Jobs area */}
      <div className='flex-1 min-w-0 md:overflow-y-auto md:h-full p-2'>
        <h1 className='font-semibold text-2xl'>All Jobs</h1>
        <p className='mb-3'>{filteredJobs.length} jobs found</p>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border-2 py-2 px-5 w-full max-w-md rounded-2xl outline-0 border-gray-600'
          type="text"
          placeholder='Search jobs, company...'
        />

        {filteredJobs.length === 0 ? (
          <p className='mt-5'>No Jobs Found. Try a different keyword.</p>
        ) : (
          <div className='flex flex-wrap gap-6 mt-5 justify-center md:justify-start'>
            {filteredJobs.map((elem) => (
              <Card key={elem.id} id={elem.id} logo={elem.logo} company={elem.companyName} time={elem.time} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Jobs