import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProductsCard from './Component/ProductsCard';
import SearchAppBar from './Component/ResponsiveAppBar';
import ResponsiveAppBar from './Component/ResponsiveAppBar';

// import Page
import LandingPage from './Pages/LandingPage';

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

const App = () => {
  return (
    // <>
    //    <ProductsCard />
    // </>
    <BrowserRouter>
      <Routes>
        <Route element={<ResponsiveAppBar />} >
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
