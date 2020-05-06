import React, {useState, useEffect} from 'react'
import Card from './card'
import { graphql, useStaticQuery} from 'gatsby'
import Table from './table'
import {isBillNew,didBillFailGovernor, didBillPassGovernor, isUpdateMajor, getBillActions, getBillIntroduction, didBillPassHouse, didBillPassSenate} from '../Util/helper'
import ListGroup from './common/listGroup'
import Pagination from '../components/common/pagination.jsx'
import { paginate } from '../Util/paginate'
import StatsGroup from './common/statsGroup.jsx'
import JsonToCSV from 'json2csv'
import format from 'date-fns/format'
// const { Parser } = require('json2csv');
import { CSVLink, CSVDownload } from "react-csv";


let counters = { newBill:0 , signedGov:0, failedBill:0, major:0}


 const headers = [
  { label: "ID", key: "id" },
  { label: "STATE", key: "state" },
  { label: "BILL_ID", key: "billid" },
  { label: "BILL_STATUS", key: "billstatus" },
  { label: "BILL_PROGRESSION", key: "billlocation" },
  { label: "BILL_INTRODUCED", key: "billintroduced" },
  { label: "BILL_LAST_UPDATED", key: "lastupdate" },
  { label: "BILL_TITLE", key: "billtitle" }
];
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
      const isMajor = isUpdateMajor(c.node.actions)
    
      if (newBill) {
         setCount(counters["newBill"]++)
      }
    
      if (isMajor) {
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
   let csvData = []
    
    //  let csvData = [["ID", "STATE", "BILL_ID", "BILL_TITLE","BILL_PROGRESSION", "BILL_STATUS", "LAST_UPDATE"]]
   data.OpenState.bills.edges.map((c,i) => {

    let billIntroduction = getBillIntroduction(c.node.actions)
    let billAction = getBillActions(c.node.actions)
    let houseBillPassed = didBillPassHouse(c.node.actions)
    let senateBillPassed = didBillPassSenate(c.node.actions)
    let governorBillPassed = didBillPassGovernor(c.node.actions)
    let billNew = isBillNew(c.node.actions)
    let billFail = didBillFailGovernor(c.node.actions)
    const isMajor = isUpdateMajor(c.node.actions)


      csvData.push({id:i+1, 
                    state: c.node.legislativeSession.jurisdiction.name, 
                    billid:c.node.identifier,
                    billstatus: (billFail ? "Bill Failed 👎🏽" : " ") + (isMajor ? "Governor 👍🏽" :" " ) + (billNew ? "New Bill ": " ")  ,
                    billlocation: (governorBillPassed!== null ? "Became Law 👍🏽" :  (houseBillPassed !== null ? "Passed House ": " ") + (senateBillPassed !==null ? "Passed Senate " : " ") ) , 
                    billintroduced: billIntroduction !== null ?  format(new Date(billIntroduction[0].date.substring(0,10)),'LLL d, yyyy') :  format(new Date(billAction[billAction.length - 1].date),'LLL dd, yyyy'),
                    lastupdate: format(new Date(billAction[0].date.substring(0,10)),'LLL dd, yyyy'),
                    billtitle:c.node.title
                  })
                    

      setCSV(csvData) 
    })
   
     
    console.log("ARR ",csvData)
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
      return <div className=" my-1 px-1 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">{cardComponent}</div>
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

    <div className="ml-4 mr-4">

      <div className="py-4 ">

        

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

    </div>
    
</div>



</div>
<div className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">

  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">

<StatsGroup actions={bills} newBills={counters.newBill}  failedBills={counters.failedBill} passBills={counters.signedGov}  billTotal= {state.bills.length}   majorCount={count.major} currentPage={pageState.currentPage} pageSize ={pageState.pageSize} />
   
<div className="mt-0 mx-7 flex lg:flex-shrink-0 lg:mt-3">
      {/* className= "mr-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 py-2 px-4" */}
        <button aria-label="Left Align" onClick={handleSwitchView} className= "hidden md:flex text-sm font-medium rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-indigo-600 hover:bg-indigo-700 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md inline-flex items-center">
        <svg className="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>        
          {/* <span>Switch to {clicked === "Table" ? "Card": "Table" } view</span> */}
          <span>{clicked === "Table" ? "Card": "Table" }</span>
        
        </button>
        <CSVLink data={csvFile} headers={headers} filename={"paid_leave_report.csv"} onClick={handleDownloadButtonClick} className= "ml-4 hidden md:flex text-sm font-medium rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md inline-flex items-center"  >
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

          
         <span>Report</span> </CSVLink>
      </div>

</div>
</div> 
   
   
    {renderView()}
    
<Pagination itemsCount={state.bills.length} pageSize={pageState.pageSize} onPageChange={handlePageChange} currentPage={pageState.currentPage} />
    </div>
   
 
  )
}

export default DisplayList
