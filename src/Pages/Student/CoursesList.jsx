import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../Components/Student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../Components/Student/CourseCard'

const CoursesList = () => {

  const {navigate, allCourses} = useContext(AppContext)
  const {input} = useParams()

  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>
      <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full'>
        <div>
          <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
          <p className='text-gray-500'>
            <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/')}>Home</span> / <span>Course List</span></p>
        </div>
        <SearchBar data={input}/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
        {allCourses.length>0 ? allCourses.map((course, index)=> <CourseCard key={index} course={course  } />) :<p>Loading</p>}
      </div>
    </div>
    </>
  )
}

export default CoursesList