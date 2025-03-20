// import styled from "styled-components";
// import HomeComponent from "./modules/Home";
// import React, {useState} from 'react';
// import Signup from './Signup';
// import {Routes, Route} from 'react-router-dom';
// import Navbar from './modules/Home/Navbar';

// const Container = styled.div`
// display: flex;
// flex-direction: column;
// align-items: center;
// margin: 30px 0 10px;
// font-family: Oswald;
// `;

// const Header = styled.span`
// color: black;
// font-size: 25px;
// font-weight: bold;
// `;
// function App() {
//   return (
//     <div className ="App">
//      <header>
//         <Navbar/>
//       </header>
//     <Signup></Signup>


//     <Container>
//       <Header>Expense Tracker</Header>
//       <HomeComponent/> 
      
//     </Container>
//     <Routes>
//       <Route path='/' element={<HomeComponent/>}/>
//       <Route path='/signup' element={<Signup/>}/>
//     </Routes> 
//     </div> 
//   )
// }

// export default App;


import styled from "styled-components";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './modules/Home/Navbar';
import HomeComponent from "./modules/Home";
import Signup from './Signup';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Oswald;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should always be visible */}

      <Container>
        <Header>Expense Tracker</Header>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
