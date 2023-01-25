// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css'

import { Routes,  Route } from 'react-router-dom'

import Home from './components/Home'
import Pistol from './components/Pistol'
import Rifle from './components/Rifle'
import Shotgun from './components/Shotgun'
import Mill from './components/Mill'
import Gauge from './components/Gauge'
import Ar from './components/Ar'
import MM from './components/MM'
import Colt from './components/Colt'


function App () {
  return (
    <>
    <Routes>
      
        <Route exact path="/" element={<Home />} />
        <Route path='/Pistol' element={<Pistol />} />
        <Route path='/Rifle' element={<Rifle />} />
        <Route path='/Shotgun' element={<Shotgun />} />
        <Route path='/Mill' element={<Mill />} />
        <Route path='/Gauge' element={<Gauge />} />
        <Route path='/Ar' element={<Ar />} />
        <Route path='/MM' element={<MM />} />
        <Route path='/Colt' element={<Colt />} />
    </Routes>
    </>
  )
}

export default App