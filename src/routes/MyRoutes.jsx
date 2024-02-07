import React from 'react'
import { Route, Routes } from 'react-router'
import Main from '../pages/Main/Main'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Error from '../pages/Error/Error'
import { useSelector, useDispatch } from 'react-redux'
import DHome from '../pages/Dashboard/DHome/DHome'
import DCourse from '../pages/Dashboard/DCourse/DCourse'
import DFeedback from '../pages/Dashboard/DFeedback/DFeedback'
import Division from '../pages/Dashboard/Division/Division'
import DProfile from '../pages/Dashboard/DProfile/DProfile'

const MyRoutes = () => {
    const userActivate = useSelector((state) => state.UserActivate.value)

    return (
        <Routes>
            <Route path='/' element={<Main />} />
            {
                !userActivate ?
                    <>
                        <Route path='login' element={<Login />} />
                        <Route path='signup' element={<Signup />} />
                    </>
                    :
                    <>
                        <Route path='/home' element={<DHome />} />
                        <Route path='/course' element={<DCourse />} />
                        <Route path='/course/:id' element={<Division />} />
                        <Route path='/feedback' element={<DFeedback />} />
                        <Route path='/profile' element={<DProfile />} />
                    </>

            }
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default MyRoutes