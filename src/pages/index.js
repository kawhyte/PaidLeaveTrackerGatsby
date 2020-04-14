import React from 'react'
import Hero from "../components/hero"
import Layout from "../components/layout"
import CardList from "../components/cardList"
import Table from "../components/tableList"

const IndexPage = () => {

  return ( 
<div  className="Roboto">
<Layout> 
<Hero /> 

<Table /> 
<CardList />  
</Layout>
</div>
)
  
}

export default IndexPage
