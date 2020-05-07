import React, {useState, useEffect} from 'react'
import Card from './card'
import { graphql, useStaticQuery} from 'gatsby'
import TableRow from './tableRow'
import Table from './table'
import {isBillNew,didBillFailGovernor, didBillPassGovernor, isUpdateMajor, getBillActions, getBillIntroduction, didBillPassHouse, didBillPassSenate} from '../Util/helper'
import ListGroup from './common/listGroup'
import Pagination from '../components/common/pagination.jsx'
import { paginate } from '../Util/paginate'
import StatsGroup from './common/statsGroup.jsx'
import format from 'date-fns/format'
import { CSVLink, CSVDownload } from "react-csv";
import _ from "lodash";

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
    
  ]);

  const [count, setCount] = useState({
    newBill:0 , signedGov:0, failedBill:0, major:0
  })

  const [sortColumn, setColumnSort] = useState({ path:'title' , order:'asc'})



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




 const handleSwitchView = (event) => {

    if (event.currentTarget.id === "card") {
      setClicked("Card")
    } else if(event.currentTarget.id === "table") {
      setClicked("Table")
    }
  }
 


  const handlePageChange = (page) =>{
    setPageState({ pageSize: 15, currentPage:page})


  }
  const handleDownloadButtonClick = () =>{
   let csvData = []

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
   
    return csvData
  }


   const handleInputChange = (event) => {
     const query = event.target.value
    
     const billsToBeFiltered =  data.OpenState.bills.edges  || [] 
    //  const billsToBeFiltered =  state.bills  || [] 
    
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

    if(event.target.value==='new'){
      const bills= billsToBeFiltered.filter(bill => {
      let val = isBillNew(bill.node.actions)

       if (val === true) {
         return(bill)
       }

    })
    setState({
      query, 
      bills :bills
    })  
    }

    if(event.target.value==='major'){
      console.log("MAJOR IF ")
      const bills= billsToBeFiltered.filter(bill => {
       let val = isUpdateMajor(bill.node.actions)
       
       console.log("VAL ", val)

       if (val === true) {
         return(bill)
       }

    })
    setState({
      query, 
      bills :bills
    })  
    }

    if(event.target.value==='passed'){
      console.log("Passed IF ")
      const bills= billsToBeFiltered.filter(bill => {
       let val = didBillPassGovernor(bill.node.actions)
       
       console.log("VAL ", val)

       if (val !== null) {
         return(bill)
       }

    })
    setState({
      query, 
      bills :bills
    })  
    }

    if(event.target.value==='failed'){
      console.log("failed IF ")
      const bills= billsToBeFiltered.filter(bill => {
       let val = didBillFailGovernor(bill.node.actions)
       
       console.log("VAL ", val)

       if (val !== null) {
         return(bill)
       }

    })
    setState({
      query, 
      bills :bills
    })  
    }
}
  

const handleSort = path =>{
  // console.log("path ", path)
  setColumnSort({path:path , order:'asc'})
}

// console.log("pathsortColumn.path ", sortColumn.path,sortColumn.order )
const sorted = _.orderBy(state.bills,[sortColumn.path], [sortColumn.order])
// console.log("SORTED", sorted)

const bills = paginate( sorted, pageState.currentPage, pageState.pageSize)
  
const renderView = ()=> {
    if(clicked === "Table"){
      return <Table tableComponent = {tableComponent}  onSort = {handleSort} />
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
      <TableRow
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
   
{/* <div className="mt-0 mx-7 flex lg:flex-shrink-0 lg:mt-3">
      className= "mr-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 py-2 px-4"
        <button aria-label="Left Align" onClick={handleSwitchView} className= "hidden md:flex text-sm font-medium rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-indigo-600 hover:bg-indigo-700 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md inline-flex items-center">
        <svg className="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"/></svg>        
          <span>Switch to {clicked === "Table" ? "Card": "Table" } view</span>
          <span>{clicked === "Table" ? "Card": "Table" }</span>
        
        </button>

  </div> */}


  <div className="hidden md:flex bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
    <button onClick={(e) => handleSwitchView (e)} className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2 active" id="card">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current w-4 h-4 mr-2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      <span>Grid</span>
    </button>
    <button onClick={(e) => handleSwitchView (e)}  className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2" id="table">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-current w-4 h-4 mr-2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      <span>Table</span>
    </button>


    <CSVLink data={csvFile} headers={headers} filename={"paid_leave_report.csv"} onClick={handleDownloadButtonClick} className= "inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-4 py-2"  >
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
