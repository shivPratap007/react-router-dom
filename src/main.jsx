import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './components/Home.jsx'
import './index.css'
import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import { Login } from './components/Login.jsx'
import { Contact } from './components/Contact.jsx'
import Github from './components/Github.jsx'
// import github from './util.jsx'
// const render=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App/>}>
//       <Route index element={<Home/>} />
//       <Route path="login" element={<Login/>}/>
//       <Route path="contact" element={<Contact/>} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="github" loader={()=>{
            fetch("https://api.github.com/users/Shivgithub007")
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              return data;
            })
          }} element={<Github/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

const github = async () => {
  try {
    const response = await fetch("https://api.github.com/users/Shivgithub007");
    let data=await response.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
