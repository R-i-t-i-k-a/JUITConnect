import './App.css'
import {Route, Routes} from 'react-router-dom';
//import pages
import LoginForm from './pages/Login/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ContactForm from './pages/ContactUs/ContactForm.jsx';
import Aboutus from './pages/AboutUs/Aboutus.jsx';
import Answers from './pages/Answers/Answers.jsx';
import Answer from './pages/Answers/Answer.jsx';
import CreatePost from './pages/Post/CreatePost.jsx';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/dashboard/post' element={<CreatePost/>} />
      <Route path='/dashboard/:id/answers' element={<Answers />} />
      <Route path='/dashboard/:id/answer' element={<Answer />} />
      <Route path='/about' element={<Aboutus/>} />
      <Route path='/contact' element={<ContactForm/>} />
    </Routes>
  )
}

export default App
