import React, {useState, useEffect} from 'react'
import Card from './card'
import { graphql, useStaticQuery} from 'gatsby'
import TableRow from './tableRow'
import Table from './table'
import {isBillNew,didBillFailGovernor, didBillPassGovernor, isUpdateMajor, getBillActions, getBillIntroduction, didBillPassHouse, didBillPassSenate} from '../Util/helper'
import Pagination from '../components/common/pagination.jsx'
import { paginate } from '../Util/paginate'
import StatsGroup from './common/statsGroup.jsx'
import format from 'date-fns/format'
import { CSVLink } from "react-csv";
import _ from "lodash";

let counters = { newBill:0 , signedGov:0, failedBill:0, major:0}


 const headers = [
  { label: "ID", key: "id" },
  { label: "STATE", key: "state" },
  { label: "BILL_ID", key: "billid" },
  { label: "BILL_STATUS", key: "billstatus" },
  { label: "BILL_PROGRESSION", key: "billlocation" },
  { label: "BILL_INTRODUCED", key: "billintroduced" },
  { label: "BILL_LAST_ACTIVITY", key: "lastupdate" },
  { label: "BILL_TITLE", key: "billtitle" }
];


const DisplayList = function () {

  const data = useStaticQuery(graphql`
  query {
    OpenState{ 
      query1:bills(last: 100 ,  actionSince: "2021-01-01", updatedSince: "2021-01-01", subject:"Family Leave") {
        edges {
          node {
            identifier
            subject
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
        totalCount
      }
  
  
      query2:  bills(last: 100, searchQuery:"\\\"paid family\\\"" ,  actionSince: "2021-01-01", updatedSince: "2021-01-01") {
        edges {
          node {
            identifier
            subject
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
          totalCount
      }
  
      }
  }

  `)

const openStateQuery = [...data.OpenState.query2.edges, ...data.OpenState.query1.edges]


// console.log("OpenState.query1 TOTAL ", data.OpenState.query1.totalCount )
// console.log("OpenState.query2 TOTAL ", data.OpenState.query2.totalCount )
//console.log("Combined ", openStateQuery )

  const emptyQuery = ""
  const [state, setState] = useState({
    bills: openStateQuery.sort((a, b) => new Date(b.node.createdAt) - new Date(a.node.createdAt)),
    query: emptyQuery
  })

  const [pageState, setPageState] = useState({
    bills: openStateQuery,
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

  openStateQuery.map(c => {
      const newBill = isBillNew(c.node.actions)
      const failed = didBillFailGovernor(c.node.actions)
      // const governorBillPassed = didBillPassGovernor(c.node.actions)
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
    setPageState(prevState =>{
      
      return {...prevState, currentPage:page}
      })


  }
  const handleDownloadButtonClick = () =>{
   let csvData = []

   openStateQuery.map((c,i) => {
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
                    billstatus: (billFail ? "Bill Failed on " + format(new Date(billFail[0].date.substring(0,10)),'LLL d, yyyy')+ " "  : " ") + (isMajor ? "Governor" :" " ) + (billNew ? "New Bill ": " ")  ,
                    billlocation: (governorBillPassed!== null ? "Became Law" :  (houseBillPassed !== null ? "Passed House ": " ") + (senateBillPassed !==null ? "Passed Senate " : " ") ) , 
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


    
     const billsToBeFiltered =  openStateQuery  || [] 
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

      


const handleClicked = event =>{

console.log(event + " was clicked")

const query = event

  
  const billsToBeFiltered =  openStateQuery  || []    
         
    if (event ==='all') {
      setState({ query, bills: billsToBeFiltered}) 
    } 

    if(event ==='new'){
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

    if(event ==='major'){
      const bills= billsToBeFiltered.filter(bill => {
       let val = isUpdateMajor(bill.node.actions)

       if (val === true) {
         return(bill)
       }

    })
    setState({
      query, 
      bills :bills
    })  
    }

    if(event ==='passed'){
     
      const bills= billsToBeFiltered.filter(bill => {
       let val = didBillPassGovernor(bill.node.actions)

       if (val !== null) {
         return(bill)
       }

    })
    setState({
      query, 
      bills :bills
    })  
    }

    if(event ==='failed'){
      const bills= billsToBeFiltered.filter(bill => {
       let val = didBillFailGovernor(bill.node.actions)

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

  setColumnSort({path:path , order:'asc'})
}


const sorted = _.orderBy(state.bills,[sortColumn.path], [sortColumn.order])


const bills = paginate( sorted, pageState.currentPage, pageState.pageSize)
  
const renderView = ()=> {
    if(clicked === "Table"){
      return <Table tableComponent = {tableComponent}  onSort = {handleSort} />
    } else{
      return <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">{cardComponent}</div>
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

<div className="ml-4 mr-4 md:ml-1 sm:ml-4">

  <div className="py-4 ">


<h2 className="mx-5 text-2xl font-semibold leading-tight">Filter</h2>
<div className="flex flex-col content-around mx-5 my-2 mb-5 sm:flex-row ">

<div className="relative block mr-3">
    <span className="absolute inset-y-0 left-0 flex items-center h-full pl-2">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-500 fill-current">
            <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
            </path>
        </svg>
    </span>
    <input type ="text"
    aria-label ="Search"
    placeholder="Filter by State or Bill ID" onChange={handleInputChange}
    className="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
</div>

    <div className="relative py-3 mr-2 text-sm font-medium text-gray-600">
     {state.bills.length} of {openStateQuery.length} {openStateQuery.length > 1 ? "bills": "bill"}
   
    </div>
    
</div>


</div>
<div className="flex items-center justify-between px-4 py-3 bg-white sm:px-6">

  <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">

<StatsGroup onClicked = {handleClicked} actions={bills} newBills={counters.newBill}  failedBills={counters.failedBill} passBills={counters.signedGov}  billTotal= {openStateQuery.length}   majorCount={count.major} currentPage={pageState.currentPage} pageSize ={pageState.pageSize} />
   



  <div className="inline-flex justify-center text-sm leading-none text-gray-500 bg-gray-200 border-2 border-gray-200 rounded-full md:flex">
    <button onClick={(e) => handleSwitchView (e)} className="inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-l-full focus:outline-none hover:text-blue-400 focus:text-blue-400 active" id="card">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 fill-current"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      <span>Grid</span>
    </button>
    <button onClick={(e) => handleSwitchView (e)}  className="inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-r-full focus:outline-none hover:text-blue-400 focus:text-blue-400" id="table">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 fill-current"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
      <span>Table</span>
    </button>


    <CSVLink data={csvFile} headers={headers} filename={"paid_leave_report.csv"} onClick={handleDownloadButtonClick} className= "inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-r-full focus:outline-none hover:text-blue-400 focus:text-blue-400"  >
        <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      
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
