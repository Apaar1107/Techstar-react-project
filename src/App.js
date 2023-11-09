import {BrowserRouter,Route,Routes } from'react-router-dom';
import Header from './Components/Header';

import './styles/App.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/mediaquery.scss'



import Home from './Components/Home';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';
const App=()=>{
 

  return(
    
    <BrowserRouter>
      <Header/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/services' element={<Services/>}/>
         
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;
