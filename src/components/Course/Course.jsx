import React, { useEffect, useState } from 'react';
import { BsBook} from 'react-icons/bs';
import {TfiMoney} from 'react-icons/tfi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
    const [allCourses, setAllcourses] = useState([]);
    const [selectCourse, setSelectCourse] = useState([]);
    useEffect(() => {
        fetch("./fakedata.json")
        .then(res=>res.json())
        .then((data)=> setAllcourses(data))
    }, [])
    const handleSelectCourse = (course) => {
        const isExist = selectCourse.find((item) => item.id == course.id);
        if (isExist){
            toast.error('This course is already added to the list');
        }
        else{
            setSelectCourse([...selectCourse, course]);
        }
        
    };
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
                                <button onClick={() => handleSelectCourse (course)} className='bg-blue-500 hover:bg-blue-700 text-white text-xl font-medium py-1 px-4 rounded w-full mt-5'>Select</button>
                                <ToastContainer />
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div> 
             <div className="w-1/4">
                <div className="ml-3">
                    <div className='product-card bg-white p-4 rounded-lg shadow-md'>
                    <h3 className='text-xl font-semibold pb-3 text-blue-600'>Credit Hour Remaining : <span>20</span>hr</h3>
                    <h3 className="mb-3 border-t-2 pt-3 text-xl font-semibold">Course Name</h3>
                    <div>
                        {selectCourse.map((course) => (
                            <div key={course.id} className='pb-3'>
                                   <li>{course.title}</li>
                            </div>
                        ))}
                        
                    </div>
                    <h3 className="mb-3 border-y-2 pt-3 text-md pb-3">Total Credit Hour : </h3>
                    <h3 className='text-md pb-3 '>Total Price : <span>00</span> USD</h3>
                    </div>
                </div>
             </div>
           </div>
        </>
    );
};

export default Course;