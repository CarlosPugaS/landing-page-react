import { useState } from 'react';
import './App.css';
import { Nav } from './components/nav';
import { Jumbotron } from './components/jumbotron';
import { Card } from './components/card';
import { Foooter } from './components/footer';

function App() {
  return (
    <>
      <Nav />
      <div>
      <Jumbotron />
      <div className='row p-5 m-0 d-flex'>
      <div className='col-12 col-sm-6 col-md-4 col-lg-3'><Card /></div>
      <div className='col-12 col-sm-6 col-md-4 col-lg-3'><Card /></div>
      <div className='col-12 col-sm-6 col-md-4 col-lg-3'><Card /></div>
      <div className='col-12 col-sm-6 col-md-4 col-lg-3'><Card /></div>
      </div>
      </div>
      <Foooter />
    </>
  )
}

export default App;
