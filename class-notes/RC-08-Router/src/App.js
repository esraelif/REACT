import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from './router/AppRouter';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

// import Home from './pages/Home';
// import MyNavbar from './components/MyNavbar';
// import Footer from './components/Footer';
// import Teacher from './pages/Teacher';
// import Login from './pages/Login';
// import ContactForm from './pages/ContactForm';
// import CourseCard from './pages/CourseCard';
// import CardDetails from './pages/CardDetails';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import TeacherDetails from './pages/TeacherDetails';
// import NotFound from './pages/NotFound';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        //router diye sayfa actık tüm bilgileri AppRouter'a gonderdim. oraya tasıdım.
        <AppRouter />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetails />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:name" element={<CardDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  )

}

export default App