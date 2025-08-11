import './App.css'
import {Home} from './Pages/Home'
import {Project} from './Pages/Project'
// import {About} from './Pages/About'
import {Login} from './Pages/Login'
import {Blog}  from './Pages/Blog'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { ContactLayout } from './Layout/ContactLayout'
import { Info } from './Component/InfoPage'
import { Form } from './Component/FormPage'
import {Skills} from './Component/Skills'
// import { Achievement } from './Component/Achievement'
import { Notfoundpage } from './Pages/Notfoundpage'
import { AboutLayout } from './Layout/AboutLayout'
import { Services } from './Pages/Services'
// import {Thankyou } from './pages/Thankyou';
import Thanks from './Component/Thanks'
import TeamSection from './Component/Teamsection'


function App() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<AboutLayout/>}>
           <Route path='skills' element={<Skills/>}/>
           <Route path='team' element={<TeamSection/>} />
        </Route>
        <Route path='project' element={<Project/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<ContactLayout/>}>
           <Route path='info' element={<Info/>}/>
           <Route path='form' element={<Form/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path="/thank-you" element={<Thanks/>} />

        <Route path='*' element={<Notfoundpage/>} />
      </Route>
    )
  )
  

return (
    <RouterProvider router={routerApp}> </RouterProvider>
)

        

}

export default App















