import React from 'react'
import cj from '../images/cj.png'
import mm from '../images/mm.png'
import Head from './Head'
import '../css/App.css'; 


export default function Main() {
  return (
    <>
<Head />
    <div className='main'>
        <div className='flamingo-text'>
        <h2>Flamingo</h2>
        <p className='subtext'>A website for you.</p>
        </div>
        <div className='cards'>

        <div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <img src={cj} className='card-img-top' alt="Image 1" />
        <div className="card-body">
          <h5 className="card-title">Compliment Jar</h5>
          <p className="card-text">Shake the compliment jar and find the sweetest nothings tailored just for you.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <img src={mm} className="card-img-top" alt="Image 2" />
        <div className="card-body">
          <h5 className="card-title">Melodic Memories</h5>
          <p className="card-text">Our playlist – every loving note, every meaningful lyric – a tribute to our journey together.</p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>
    </>
  )
}
