import React, {useState, useEffect} from 'react'
import Card from './card'
import { graphql, useStaticQuery} from 'gatsby'
import Table from './table'
import {isBillNew,didBillFailGovernor,didBillPassGovernor} from '../Util/helper'
import ListGroup from './common/listGroup'
import Pagination from '../components/common/pagination.jsx'
import { paginate } from '../Util/paginate'
import StatsGroup from './common/statsGroup.jsx'
import JsonToCSV from 'json2csv'
// const { Parser } = require('json2csv');
import { CSVLink, CSVDownload } from "react-csv";


let counters = { newBill:0 , signedGov:0, failedBill:0, major:0}

 let csvData = [["ID", "STATE", "BILL_ID", "BILL_TITLE","BILL_PROGRESSION", "BILL_STATUS", "LAST_UPDATE"]]
//   ["title", "Name", "State"]
// ];

const DisplayList = function () {

  const data = useStaticQuery(graphql`
  query {
    OpenState{ 
           bills(first: 100, searchQuery:"\\\"paid family leave\\\"" , actionSince: "2019-07-07") {
        edges {
          node {
            identifier
            title
            classification
            updatedAt
            createdAt
            legislativeSession {
              identifier
              jurisdiction {
                name
              }
            }
            actions {
              order
              date
              description
              classification
              organization{
                classification
                foundingDate
                name
                image
                updatedAt
                createdAt
                            }
            }
            
            sources {
              url
                
            }
          }
        }
      }
    }
  }

  `)


  const emptyQuery = ""
  const [state, setState] = useState({
    bills: data.OpenState.bills.edges.sort((a, b) => new Date(b.node.createdAt) - new Date(a.node.createdAt)),
    query: emptyQuery
  })

  const [pageState, setPageState] = useState({
    bills: data.OpenState.bills.edges,
    currentPage: 1,
    pageSize: 15
  })

  const [clicked, setClicked] = useState("Card");

  const [csvFile, setCSV] = useState( [
    //["STATE", "BILL_ID", "BILL_TITLE","BILL_PROGRESSION", "BILL_STATUS", "LAST_UPDATE"]
    
  ]);

  const [count, setCount] = useState({
    newBill:0 , signedGov:0, failedBill:0, major:0
  })



useEffect(() => {

   data.OpenState.bills.edges.map(c => {
      const newBill = isBillNew(c.node.actions)
      const failed = didBillFailGovernor(c.node.actions)
      const governorBillPassed = didBillPassGovernor(c.node.actions)
    
      if (newBill) {
         setCount(counters["newBill"]++)
      }
    
      if (governorBillPassed) {
        setCount(counters.signedGov++)
      }

      if (failed) {
        setCount(counters.failedBill++)
      }
    return counters
     })
   },[]);




  function handleSwitchView() {
    clicked === "Table" ? setClicked("Card") : setClicked("Table") 
  }
 


  const handlePageChange = (page) =>{
    setPageState({ pageSize: 15, currentPage:page})


  }
  const handleDownloadButtonClick = () =>{
    csvData = [["ID" ,"STATE", "BILL_ID", "BILL_TITLE","BILL_PROGRESSION", "BILL_STATUS", "LAST_UPDATE"]]
    
    
   data.OpenState.bills.edges.map((c,i) => {

      csvData.push([i+1,c.node.legislativeSession.jurisdiction.name,c.node.identifier,c.node.title, c.node.createdAt, "test","Test2"])
      setCSV(csvData) 
    })
   
     
    console.log("ARR ",csvData)
    // console.log("ARR cvs ",csv)
    return csvData

  }


   const handleInputChange = (event) => {
     const query = event.target.value
 
      console.log("state.bills ", state.bills )
    
     const billsToBeFiltered =  data.OpenState.bills.edges  || [] 
    
     const bills= billsToBeFiltered.filter(bill => {
      
       const { identifier, legislativeSession } = bill.node
       return (
        
         identifier.replace(/\s+/g, "").toLowerCase().includes(query.toLowerCase()) ||
        (legislativeSession.jurisdiction.name && legislativeSession.jurisdiction.name
           .toLowerCase()
          .includes(query.toLowerCase()))
        )
         })
      
        
   setState({
           query, 
           bills :bills
         })
     }
      
const handleDropdownChange = (event, jsonData)  =>{

  console.log("EVENT ", event.target.value)
         const query = event.target.value

  
  const billsToBeFiltered =  data.OpenState.bills.edges  || []    
         
    if (event.target.value==='all') {
      setState({ query, bills: billsToBeFiltered}) 
    } 

    if(event.target.value==='passed' ){

            
    }

}  
  
console.log("BILLS", data.OpenState.bills.edges)

const bills = paginate( state.bills, pageState.currentPage, pageState.pageSize)
  
  const renderView = ()=>{
    if(clicked === "Table"){
      return <div className="py-2">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-5 py-4 overflow-x-auto">
                <div className="inline-block  shadow rounded-lg overflow-hidden">
                    <table className="table-fixed ">
      
                    <thead>
                            <tr>
                            <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    State/Bill ID
                                </th>
                                <th
                                    className="w-2/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    bill title
                                </th>
                                <th
                                    className="w-2/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Bill Progression
                                </th>
                                <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Bill Status
                                </th>
                                <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Last Update
                                </th>
                                <th
                                    className="w-1/6 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Sources
                                </th>
                             
                            </tr>
                        </thead>
                        
                        <tbody>
                            {tableComponent}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    } else{
      return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{cardComponent}</div>
    }
  }
 

  const cardComponent = bills.map((b, i) => {
    return (
      <Card
        key={i}
        title={b.node.title}
        identifier={b.node.identifier}
        jurisdiction={b.node.legislativeSession.jurisdiction.name}
        createdAt={b.node.createdAt}
        sources={b.node.sources}
        actions={b.node.actions}
        
      />
    )
  })


  const tableComponent = bills.map((b, i) => {
    return (
      <Table
        key={i}
        title={b.node.title}
        identifier={b.node.identifier}
        jurisdiction={b.node.legislativeSession.jurisdiction.name}
        createdAt={b.node.createdAt}
        sources={b.node.sources}
        actions={b.node.actions}
      />
    )
  })


return (

    <div className="ml-16 mr-16">

      <div className="py-8 ">

<h2 className="mx-5 text-2xl font-semibold leading-tight">Filter</h2>

<div className="my-2 mx-5 mb-5 flex sm:flex-row flex-col">
<div className="flex  flex-row mb-1 sm:mb-0">

</div>
<div className="block relative">
    <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
            <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
            </path>
        </svg>
    </span>
    <input type ="text"
    aria-label ="Search"
    placeholder="Filter by State or Bill ID" onChange={handleInputChange}
    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
</div>
    <div className="relative">
    <ListGroup items = {data.OpenState.bills.edges}  onChange={handleDropdownChange} /> 

   
    
    {/* <label htmlFor="filter-value">
        <select id="filter-value" onChange={(e)=> handleDropdownChange(e, bills)}
            className="sm:ml-3 appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 sm:border-r border-r border-l border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
            <option defaultValue="all" value="all" >All</option>
            <option value="new">New bills</option>
            <option value="major">Major Update</option>
            <option value="passed">Signed by Gov</option>
            <option value="failed">Failed bills</option>
        </select></label>
        <div
            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div> */}
    </div>
    
</div>

      <div className="mt-0 mx-5 flex lg:flex-shrink-0 lg:mt-3">
      {/* className= "mr-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 py-2 px-4" */}
        <button aria-label="Left Align" onClick={handleSwitchView} className= "rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-indigo-500 hover:bg-indigo-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md">
        Switch to {clicked === "Table" ? "Card": "Table" } view
        </button>
        <CSVLink data={csvFile} onClick={handleDownloadButtonClick} className= "ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md"  >Download CSV</CSVLink>
      </div>


</div>
<StatsGroup actions={bills} newBills={counters.newBill}  failedBills={counters.failedBill} passBills={counters.signedGov}  billTotal= {state.bills.length}   majorCount={count.major} currentPage={pageState.currentPage} pageSize ={pageState.pageSize} />
    {renderView()}
    
<Pagination itemsCount={state.bills.length} pageSize={pageState.pageSize} onPageChange={handlePageChange} currentPage={pageState.currentPage} />
    </div>
 
  )
}

export default DisplayList
