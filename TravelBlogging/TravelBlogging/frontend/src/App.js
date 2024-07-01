// // src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Login from './components/Login/login';
import Search from './components/Search/Search';
import DashBoard from './components/DashBoard/Dashboard';
import Profile from './components/Profile/Profile'
import Destination from './components/Destination/Destination';
// import Blog from './components/Blog/Blog';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           <Route path ="/" element ={<DashBoard/>}/>
           <Route path="/api/users/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/api/users/:id" element={<Profile/>}/>
          <Route path="/destinations/:category" element={<Destination />} />
    
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Login from './components/Login/login';
// import Search from './components/Search/Search';
// import Dashboard from './components/Dashboard/dashboard';
// import Profile from './components/Profile/Profile';
// import Destination from './components/Destination/Destination';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/api/users/search" element={<Search />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/api/users/:id" element={<Profile />} />
//           <Route path="/destinations/:type" element={<Destination />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
