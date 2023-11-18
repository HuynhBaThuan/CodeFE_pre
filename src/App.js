import React from 'react'
import User from './User/App'
import Store from './Store/App'
// import Admin from './Admin/App'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
        <Router>
              <Routes>
                <Route path="/*" element={<User />} />
                <Route path="/store" element={<Store />} />
              </Routes>
       </Router>
      // <User/>
    )
}

export default App
