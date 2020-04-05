import React from 'react'
import { Link } from 'gatsby'

const Card = ({ name }) => {
  return (
    <div>
      <div className="tc ba b--black-20 dib br0 pa3 ma2 grow bw1 bg-near-white w5 hide-child relative">
        <h2 iclassName=" tl f5 fw4 dark-gray mt0"></h2>
        <div className="tc">
          <img
            rel="dns-prefetch"
            src="https://source.unsplash.com/user/erondu/600x400"
            className=" h4 w4 dib pa2"
            title="Lotto ticket"
            alt="Lotto Ticket"
          />
          <h1 className="f3 mb2 truncate">{name}</h1>
          <hr className="mw4 bb bw1 b--black-10"></hr>
          <h2 className="number f5 fw4 dark-gray mt0">Top prize:</h2>
          <h2 className="f5 fw4 dark-gray mt0">Top prize remaining:</h2>
          <h2 className="f5 fw4 dark-gray mt0">Odds of winning:</h2>
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
