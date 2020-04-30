import React, {useState, useEffect} from 'react'
import Card from './card'
import { graphql, useStaticQuery} from 'gatsby'
import Table from './table'
import {sentenceCase,isBillNew, isBillSignedByGovornor, isBillFailedByGovornor, isUpdateMajor, didBillPassGovernor} from '../Util/helper'
// let counters = { newBill:0 , signedGov:0, failedBill:0, major:0}
import ListGroup from './common/listGroup'
import Pagination from '../components/common/pagination.jsx'
import { paginate } from '../Util/paginate'

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
    pageSize: 10
  })

  const [clicked, setClicked] = useState("Card");

  const [count, setCount] = useState({
    newBill:0 , signedGov:0, failedBill:0, major:0
  })

  function handleSwitchView() {
    clicked === "Table" ? setClicked("Card") : setClicked("Table") 
  }

  

  // useEffect(() => {
  
  //   const test = filteredData.map((status, i)=> {
  //     let signedGov1 = isBillSignedByGovornor(status.node.actions) 
  //     let newBill1 = isBillNew(status.node.actions) 
  //     let failedBill1 = isBillFailedByGovornor(status.node.actions) 
  //     let major1 = isUpdateMajor(status.node.actions)

  //     // console.log('signedGov ', signedGov)
  //     if (signedGov1=== true) {
  //       setCount({ 
  //         ...count,
  //         count:count['signedGov']++ 
  //       })
  //     }

  //     if (major1=== true) {
  //       setCount({ 
  //         ...count,
  //         count:count['major']++ 
  //       })
  //     }
      
  //     if (newBill1=== true) {
  //       setCount({ 
  //         ...count,
  //         count:count['newBill']++ 
  //       })
  //     }
  //     if (failedBill1=== true) {
  //       setCount({ 
  //         ...count,
  //         count:count['failedBill']++ 
  //       })
  //     }

  //       })
  
    
  // }, []);

  // const { signedGov, major, newBill, failedBill  } = count
 


  const handlePageChange = (page) =>{
    setPageState({ pageSize: 10, currentPage:page})

  }


   const handleInputChange = (event) => {
     const query = event.target.value
  //   console.log("event.target.value", event.target.value )
      console.log("state.bills ", state.bills )
    
     const billsToBeFiltered =  data.OpenState.bills.edges  || [] //data.OpenState.bills.edges || []
    
     const bills= billsToBeFiltered.filter(bill => {
      
       const { identifier, legislativeSession } = bill.node
       return (
        
         identifier.replace(/\s+/g, "").toLowerCase().includes(query.toLowerCase()) ||
        (legislativeSession.jurisdiction.name && legislativeSession.jurisdiction.name
           .toLowerCase()
          .includes(query.toLowerCase()))
        )
         })

         console.log("filteredBills " , bills )
      
        
         setState({
           query, 
           bills :bills
         })
     }
      
       const handleDropdownChange = (event, jsonData)  =>{

        console.log("EVENT ", event.target.value)
         const query = event.target.value
  //       const posts = jsonData || []
  
  const billsToBeFiltered =  data.OpenState.bills.edges  || []    
  
  console.log("billsToBeFiltered ", billsToBeFiltered)
         
           if (event.target.value==='all') {
           setState({ query, bills: billsToBeFiltered}) 
           } 

           if(event.target.value==='passed' ){

            
           }

  //      const test = posts.filter(post => {
         
  //        if (event.target.value==='passed'){
  //         let signedGov1 = didBillPassGovernor(post.node.actions)

  //         if (typeof (signedGov1) !== "undefined" && (signedGov1.length > 0)) {

            
  //           return signedGov1
  //         }
          
  //        }
         

        
  //     })
  //     setState({ query,filteredData: test})

       }  
  
  // let { filteredData } = state
  
  // console.log("filteredData outside",filteredData)

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
 
  // sorted = actions.sort((a, b) => new Date(b.date) - new Date(a.date));
 const kenny = bills.sort((a, b) => new Date(b.node.updatedAt) - new Date(a.node.updatedAt))

 console.log("KENNY ", kenny)
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

        <button aria-label="Left Align" onClick={handleSwitchView} className= "mr-3 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 py-2 px-4">
        Switch to {clicked === "Table" ? "Card": "Table" } view
        </button>
      </div>


</div>

<div className= "ml-4 px-1"> 
    <div className="flex  mt-4 mb-2"> 
    
    
      {/* <p className="text-sm font-medium bg-blue-300 py-1 px-2 mr-2 rounded text-black align-middle"> {state.bills.length} bills found</p> */}
      <p className="text-sm font-medium bg-green-300 py-1 px-2 mr-2  rounded text-black align-middle"> {count.signedGov} bills signed by Governor</p>
      <p className="text-sm font-medium bg-yellow-300 py-1 px-2  mr-2 rounded text-black align-middle">{count.newBill} new bills</p> 
      <p className="text-sm font-medium bg-red-300 py-1 px-2 mr-2 rounded text-black align-middle">{count.newBill} failed bills</p>
      <p className="text-sm font-medium bg-indigo-300 py-1 px-2  mr-2 rounded text-black align-middle">{count.major} bills had major updates</p>
   
    </div>
    <small className="font-normal leading-normal mb-4 text-gray-800 ">
     Displaying page {pageState.currentPage}  of {pageState.pageSize} of {state.bills.length} results
    </small>
</div>

    {renderView()}
    
  <Pagination itemsCount={state.bills.length} pageSize={pageState.pageSize} onPageChange={handlePageChange} currentPage={pageState.currentPage}></Pagination>
    </div>
  )
}

export default DisplayList
