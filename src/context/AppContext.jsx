import { createContext, use, useEffect } from "react";
import { dummyCourses } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const [allCourses, setAllCourses] = useState([])
    const [isInstructor, setIsInstructor] = useState(true)
    // console.log(dummyCourses)

    const fetchAllCourses =  () => {
        setAllCourses(dummyCourses)
        // console.log(allCourses)
    }
    //to calculate rating 
    const calculateRating = (course) => {
        if(course.courseRatings.length === 0) {
            return 0
        }
        let totalRating = 0
        course.courseRatings.forEach(rating => {
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }

    useEffect(() => {
        fetchAllCourses()
    }, []) 

    const value = {
        currency, allCourses, navigate, calculateRating, isInstructor, setIsInstructor
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}  




















// import { createContext, useEffect, useState } from "react";
// import { dummyCourses } from "../assets/assets";

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {
//     const currency = import.meta.env.VITE_CURRENCY;
//     const [allCourses, setAllCourses] = useState([]);

//     // Function to update state
//     const fetchAllCourses = () => {
//         setAllCourses(dummyCourses); // ✅ This is async
//     };

//     // Run only once on mount
//     useEffect(() => {
//         fetchAllCourses();
//     }, []);

//     // ✅ Log after state has been updated
//     useEffect(() => {
//         console.log("Updated allCourses:", allCourses);
//     }, [allCourses]);

//     const value = {
//         currency,
//         allCourses
//     };

//     return (
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     );
// };
