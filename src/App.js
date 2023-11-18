import React from 'react'
import User from './User/App'
import Store from './Store/App'
// import Admin from './Admin/App'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
<<<<<<< HEAD
        <div>
            <Store />
            {/* <Admin />
            <User /> */}
        </div>
=======
        <Router>
              <Routes>
                <Route path="/" element={<User />} />
                {/* <Route path="/admin" element={<Admin />} /> */}
                <Route path="/store" element={<Store />} />
              </Routes>
       </Router>

>>>>>>> 3160120623e65a8b77a6ac110650beb22cbfc399
    )
}

export default App
