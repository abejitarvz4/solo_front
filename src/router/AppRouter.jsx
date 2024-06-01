import React from 'react'
import { Navbar } from '../Navbar'
import { Homepage } from '../home/Homepage'
import { Loginpage } from '../login/Loginpage'
import { Registerpage } from '../register/Registerpage'
import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element= {<Homepage/>}>
                <Route path='login' element= {<Loginpage/>} />
                <Route path='register' element= {<Registerpage/>} />
            </Route>
        </Routes>
    </>
  )
}
