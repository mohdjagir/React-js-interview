import logo from './logo.svg';
import './App.css';
import { Cake } from './Layouts/Cake';
import { IceCream } from './Layouts/IceCream';
import { User } from './Layouts/User';
import { Counter } from './Layouts/Counter';
import ContextExample from './Layouts/ContextExample';
import ContextExample2 from './Layouts/ContextExample2';
import Navbar from './components/Navbar';
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Home from './Pages/Home';
import About from './Pages/About';
import Setting from './Pages/Setting';
import Contact from './Pages/Contact';
import RootLoayout from './Layouts/RootLoayout';
import ContactLayouts from './Layouts/ContactLayouts';
import Info from './Pages/Info';
import Form from './Pages/Form';
import NotFount from './Pages/NotFount';
import JobsLayout from './Layouts/JobsLayout';
import Jobs from './Pages/Jobs';
import JobsDetail from './Pages/JobsDetail';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLoayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
     
      <Route path='setting' element={<Setting />} />
      <Route path='contact' element={<ContactLayouts />} >
        <Route path='info' element={<Info />}/>
        <Route path='form' element={<Form />} />
      </Route>
      <Route path='jobs' element={<JobsLayout />}>
        {/* <Route index element={<Jobs />}/> */}
        <Route path={':id'} element={<JobsDetail />}/>
      </Route>
      <Route path='*' element={<NotFount />} />
    </Route>
  ))
  return (

    <div >
      {/* <Navbar /> */}
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/setting' element={<Setting/>}/>
      </Routes> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
