import React, { useEffect, useState } from 'react';
import { BsBook} from 'react-icons/bs';
import {TfiMoney} from 'react-icons/tfi';

const Course = () => {
    const [allCourses, setAllcourses] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
        .then(res=>res.json())
        .then((data)=> setAllcourses(data))
    }, [])
    return (
        <>
           <div className='w-[1400px] mx-auto flex'>
             <div className="w-3/4 max-w-full">
                <div className="all-courses grid grid-cols-3 gap-4">
                    {
                    allCourses.map(course => (
                        <div key={course.id} className="courses-content">
                            <div className=''>
                            <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
                                <div className="mb-[20px] relative">
                                <img src={course.coverImage} alt="" className="max-w-full w-full h-[200px]"/>
                                </div>
                                <h2 className='text-xl font-semibold'>{course.title}</h2>
                                <p className='text-[14px] mt-2 mb-4'>{course.description}</p>
                                <div className="flex">
                                <span className='text-2xl pr-3'><TfiMoney></TfiMoney></span>
                                   <p>Price: {course.price}</p> 
                                   <span className='text-2xl pr-3 pl-[30px]'><BsBook></BsBook></span>
                                   <p><span>Credit: {course.creditHour}hr</span></p> 
                                </div>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white text-xl font-medium py-1 px-4 rounded w-full mt-5'>Select</button>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div> 
             <div className="w-1/4">
                <div className="ml-3">
                    <div className='product-card bg-white p-4 rounded-lg shadow-md'>
                    <h3 className='text-xl font-semibold pb-3 text-blue-600'>Credit Hour Remaining : <span>7</span>hr</h3>
                    <h3 className="mb-3 border-t-2 pt-3 text-xl font-semibold">Course Name</h3>
                    <div></div>
                    <h3 className="mb-3 border-y-2 pt-3 text-md pb-3">Total Credit Hour : 13</h3>
                    <h3 className='text-md pb-3 '>Total Price : <span>48000</span> USD</h3>
                    </div>
                </div>
             </div>
           </div>
        </>
    );
};

export default Course;