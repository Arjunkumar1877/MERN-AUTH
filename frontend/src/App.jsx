import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Container  } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const user = useSelector((state) => state);
  console.log(user)
  return (
    <>
    <Header />
    <ToastContainer />

    <Container className="my-2">
    <Outlet />

    </Container>
    </>
  )
}

export default App
