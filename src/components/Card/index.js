import React from 'react'

export default function CardCP() {
  return (
    <>
      <div className="card" >
        <div className="card-header">
          <div className="header-title">Header</div>
          <ul className="nav nav-tabs card-header-tabs flex">
            <li className="nav-item ">
              <a className="nav-link active btn-all bg-primary" aria-current="true" href="/#">Active</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-all bg-link" href="/#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-all disabled" href="/#">Disabled</a>
            </li>
          </ul>
        </div>
        <img
          src= "https://images.hdqwalls.com/download/leo-messi-image-1600x900.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h2 className="card-title">Card title</h2>
          <h4 className="card-subtitle my-5">Card subtitle</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className="list-group" >
            <div className="list-header">
              Featured
            </div>
            <ul className="list-group-card list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="list-footer">
              Card footer
            </div>
          </div>
          <div className="flex align-items-center card-link-btn ">
            <a href="/#" className="card-link">
              Card link
            </a>
            <a href="/#" className="card-link">Another link</a>
            <a href="/#" className="btn-all bg-primary btn-card">
              Go somewhere
            </a>
          </div>
          <div className="text-muted">Last updated 3 mins ago</div>
        </div>
        <div className="card-footer">
          <div className="text-footer">2 days ago</div>
        </div>
      </div>
    </>
  )
}
