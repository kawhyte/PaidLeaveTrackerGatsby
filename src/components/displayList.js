import React, { useState, useEffect } from 'react'
import Card from './card'
import { graphql, useStaticQuery, Link } from 'gatsby'
import TableRow from './tableRow'
import Table from './table'
import Nav from './nav'
import {
  isBillNew,
  didBillFailGovernor,
  didBillPassGovernor,
  isUpdateMajor,
  getBillActions,
  getBillIntroduction,
  didBillPassHouse,
  didBillPassSenate,
} from '../Util/helper'
import Pagination from '../components/common/pagination'
import { GetDataFromAPI } from '../Util/getAPIData'
// import { GetEmploymentDataFromAPI } from '../Util/getEmpolymentAPIData'
// import { GetWithholdingDataFromAPI } from '../Util/getWithholdingAPIData'

import { paginate } from '../Util/paginate'
import StatsGroup from './common/statsGroup'
import format from 'date-fns/format'
import { CSVLink } from 'react-csv'
import DataGroup from './common/dataGroup'
import _ from 'lodash'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { statusOptions, stateOptions } from '../Util/dropDownData'

let openStateQuery = []
const animatedComponents = makeAnimated()

const headers = [
  { label: 'ID', key: 'id' },
  { label: 'STATE', key: 'state' },
  { label: 'BILL_ID', key: 'billid' },
  { label: 'BILL_STATUS', key: 'billstatus' },
  { label: 'BILL_PROGRESSION', key: 'billlocation' },
  { label: 'BILL_INTRODUCED', key: 'billintroduced' },
  { label: 'BILL_LAST_ACTIVITY', key: 'lastupdate' },
  { label: 'BILL_TITLE', key: 'billtitle' },
]

const DisplayList = function ({ type, text, data }) {
  console.log('DisplayList data ', data)
  //type === "leave" ? data = GetDataFromAPI() : data = GetEmploymentDataFromAPI()
  //const
  //console.log('PROPS', type)
  switch (type) {
    case 'leave':
      openStateQuery = [
        ...data.OpenState.query2.edges,
        ...data.OpenState.query1.edges,
      ]

      break
    case 'employment':
      openStateQuery = [...data.bills.bills.edges]

      break
    case 'withholding':
      openStateQuery = [...data.bills.bills.edges]

      break

    default:
      data = []
      console.log('No data found ')
      break
  }

  // const openStateQuery = [
  //   ...data.OpenState.query2.edges,
  //   ...data.OpenState.query1.edges,
  // ]

  // console.log('OpenState.query1 TOTAL ', data.OpenState.query1.totalCount)
  // console.log('OpenState.query2 TOTAL ', data.OpenState.query2.totalCount)
  console.log('Combined ', openStateQuery)
  //const [stateValue, setStateValue] = useState('')
  //const [statusValue, setStatusValue] = useState('all')

  const emptyQuery = ''
  const [state, setState] = useState({
    bills: openStateQuery.sort(
      (a, b) => new Date(b.node.createdAt) - new Date(a.node.createdAt)
    ),
    query: emptyQuery,
    stateValue: '',
    statusValue: '',
  })

  const [pageState, setPageState] = useState({
    bills: openStateQuery,
    currentPage: 1,
    pageSize: 10,
  })

  const [clicked, setClicked] = useState('Card')

  const [csvFile, setCSV] = useState([])

  const [newBillCount, setNewBillCount] = useState(0)
  const [failedBillCount, setFailedBillCount] = useState(0)
  const [governorSignedBillCount, setGovernorSignedBillCount] = useState(0)

  const [sortColumn, setColumnSort] = useState({ path: 'title', order: 'asc' })

  useEffect(() => {
    openStateQuery.map((c) => {
      const newBill = isBillNew(c.node.actions)

      const failed = didBillFailGovernor(c.node.actions)
      // const governorBillPassed = didBillPassGovernor(c.node.actions)
      const isMajor = isUpdateMajor(c.node.actions)

      if (newBill) {
        setNewBillCount((prevCount) => prevCount + 1)
      }

      if (isMajor) {
        setGovernorSignedBillCount((prevCount) => prevCount + 1)
      }

      if (failed) {
        setFailedBillCount((prevCount) => prevCount + 1)
      }
      //return counters
    })
  }, [])

  const handleSwitchView = (event) => {
    if (event.currentTarget.id === 'card') {
      setClicked('Card')
    } else if (event.currentTarget.id === 'table') {
      setClicked('Table')
    }
  }

  const handlePageChange = (page) => {
    setPageState((prevState) => {
      return { ...prevState, currentPage: page }
    })
  }
  const handleDownloadButtonClick = () => {
    let csvData = []

    openStateQuery.map((c, i) => {
      let billIntroduction = getBillIntroduction(c.node.actions)
      let billAction = getBillActions(c.node.actions)
      let houseBillPassed = didBillPassHouse(c.node.actions)
      let senateBillPassed = didBillPassSenate(c.node.actions)
      let governorBillPassed = didBillPassGovernor(c.node.actions)
      let billNew = isBillNew(c.node.actions)
      let billFail = didBillFailGovernor(c.node.actions)
      const isMajor = isUpdateMajor(c.node.actions)

      csvData.push({
        id: i + 1,
        state: c.node.legislativeSession.jurisdiction.name,
        billid: c.node.identifier,
        billstatus:
          (billFail
            ? 'Bill Failed on ' +
              format(
                new Date(billFail[0].date.substring(0, 10)),
                'LLL d, yyyy'
              ) +
              ' '
            : ' ') +
          (isMajor ? 'Governor' : ' ') +
          (billNew ? 'New Bill ' : ' '),
        billlocation:
          governorBillPassed !== null
            ? 'Became Law'
            : (houseBillPassed !== null ? 'Passed House ' : ' ') +
              (senateBillPassed !== null ? 'Passed Senate ' : ' '),
        billintroduced:
          billIntroduction !== null
            ? format(
                new Date(billIntroduction[0].date.substring(0, 10)),
                'LLL d, yyyy'
              )
            : format(
                new Date(billAction[billAction.length - 1].date),
                'LLL dd, yyyy'
              ),
        lastupdate: format(
          new Date(billAction[0].date.substring(0, 10)),
          'LLL dd, yyyy'
        ),
        billtitle: c.node.title,
      })

      setCSV(csvData)
    })

    return csvData
  }

  const handleInputChange = (event) => {
    const query = event.target.value

    const billsToBeFiltered = openStateQuery || []

    const bills = billsToBeFiltered.filter((bill) => {
      const { identifier, legislativeSession } = bill.node
      return (
        identifier
          .replace(/\s+/g, '')
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        (legislativeSession.jurisdiction.name &&
          legislativeSession.jurisdiction.name
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      bills: bills,
    })
  }

  const handleStateChange = (event) => {
    let query = event

    if (query === null) {
      setState({
        query,
        bills: openStateQuery,
      })
      return
    }

    // console.log('handleStateChange MY current STATE is ', state.stateValue)
    // console.log(' handleStateChange MY current Status is ', state.statusValue)

    //const billsToBeFiltered = openStateQuery || []
    const billsToBeFiltered = state.bills || []
    // console.log('openStateQuery^^ --', openStateQuery)
    // console.log('STATE^^ --', state.bills)
    let bills = billsToBeFiltered.filter((bill) => {
      const { identifier, legislativeSession } = bill.node

      return (
        legislativeSession.jurisdiction.name &&
        legislativeSession.jurisdiction.name.toLowerCase() ===
          query.toLowerCase()
      )
    })

    //console.log('BILLSIN1', bills)

    if (state.statusValue) {
      bills = bills.filter(
        (item) =>
          item.node.legislativeSession.jurisdiction.name === state.statusValue
      )
    }

    //console.log('filtered1', bills)
    setState({
      query,
      bills: bills,
      statusValue: state.statusValue,
      stateValue: event,
    })
  }

  const handleStatusChange = (event) => {
    console.log(event + ' was clicked')

    const query = event
    // console.log('MY current STATE is ', state.stateValue)
    // console.log('MY current Status is ', state.statusValue)

    if (query === null) {
      setState({
        query,
        bills: openStateQuery,
      })
      return
    }

    const billsToBeFiltered = openStateQuery || []
    //const billsToBeFiltered = state.bills || []

    if (event === 'all') {
      setState({ query, bills: openStateQuery })
    }

    if (event === 'new') {
      let bills = billsToBeFiltered.filter((bill) => {
        let val = isBillNew(bill.node.actions)

        if (val === true) {
          return bill
        }
      })

      // console.log('BILLS ', bills)
      // console.log('stateValue ', state.stateValue)

      if (state.stateValue) {
        bills = bills.filter(
          (item) =>
            item.node.legislativeSession.jurisdiction.name === state.stateValue
        )
      }

      // console.log('FILTERED', bills)
      setState({
        query,
        bills: bills,
        statusValue: event,
        stateValue: state.stateValue,
      })
    }

    if (event === 'major') {
      let bills = billsToBeFiltered.filter((bill) => {
        let val = isUpdateMajor(bill.node.actions)

        if (val === true) {
          return bill
        }
      })

      if (state.stateValue) {
        bills = bills.filter(
          (item) =>
            item.node.legislativeSession.jurisdiction.name === state.stateValue
        )
      }

      setState({
        query,
        bills: bills,
      })
    }

    if (event === 'passed') {
      let bills = billsToBeFiltered.filter((bill) => {
        let val = didBillPassGovernor(bill.node.actions)

        if (val !== null) {
          return bill
        }
      })

      if (state.stateValue) {
        bills = bills.filter(
          (item) =>
            item.node.legislativeSession.jurisdiction.name === state.stateValue
        )
      }
      setState({
        query,
        bills: bills,
      })
    }

    if (event === 'failed') {
      let bills = billsToBeFiltered.filter((bill) => {
        let val = didBillFailGovernor(bill.node.actions)

        if (val !== null) {
          return bill
        }
      })

      if (state.stateValue) {
        bills = bills.filter(
          (item) =>
            item.node.legislativeSession.jurisdiction.name === state.stateValue
        )
      }

      setState({
        query,
        bills: bills,
      })
    }

    //console.log("statusValue END",state.statusValue)
  }

  const handleSort = (path) => {
    setColumnSort({ path: path, order: 'asc' })
  }

  const sorted = _.orderBy(state.bills, [sortColumn.path], [sortColumn.order])

  const bills = sorted //paginate(sorted, pageState.currentPage, pageState.pageSize)

  const renderView = () => {
    if (clicked === 'Table') {
      return <Table tableComponent={tableComponent} onSort={handleSort} />
    } else {
      return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardComponent}
        </div>
      )
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

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'lightblue',
        primary: 'indigo',
      },
    }
  }

  return (
    <>
      <Nav onChange={handleInputChange} text={text} />
      <div className="flex justify-center ">
        <DataGroup
          actions={state}
          newBills={newBillCount}
          failedBills={failedBillCount}
          passBills={governorSignedBillCount}
          billTotal={openStateQuery.length}
          currentPage={pageState.currentPage}
          pageSize={pageState.pageSize}
        />
      </div>
      <div className="ml-4 mr-4 md:ml-1 sm:ml-4  ">
        <div className=" flex  flex-col  mb-12 px-8 py-8 rounded-3xl mx-auto max-w-3xl bg-blue-100">
          <p className="hidden sm:block text-lg font-bold mb-3">Filter</p>
          <div className=" flex flex-col sm:flex-row justify-between  align-bottom w-full ">
            <div className="font-medium text-gray-600 sm:w-5/12 sm:mr-4 ">
              <Select
                options={statusOptions}
                components={animatedComponents}
                theme={customTheme}
                isClearable
                //onChange={setbillFilterItem}
                //onChange={values => handleClicked(values.map(type => type.value))}
                onChange={(values) =>
                  handleStatusChange(values ? values.value : null)
                }
                noOptionsMessage={() => 'no options left'}
                defaultValue={'hi'}
                placeholder="All bills"
                className="mb-3"
                isSearchable
              />
            </div>

            <div className="font-medium text-gray-600 sm:w-5/12">
              <Select
                options={stateOptions}
                components={animatedComponents}
                theme={customTheme}
                defaultValue={'test'}
                isClearable
                //onChange={setbillFilterItem}
                //onChange={values => handleClicked(values.map(type => type.value))}
                onChange={(values) =>
                  handleStateChange(values ? values.label : null)
                }
                noOptionsMessage={() => 'no options left'}
                placeholder="All states"
                className="mb-3"
                isSearchable
              />
            </div>

            <div className="flex items-center justify-end  font-light px-1 mx-1 text-sm text-indigo-600 sm:w-2/12">
              {state.bills.length}{' '}
              {openStateQuery.length > 1 ? 'bills' : 'bill'} found
            </div>
          </div>

          <div className=" md:hidden  sm:ml-6 mt-6 ">
            <div className="flex flex-wrap justify-center sm:justify-between ">
              <Link to="/dashboard" className="" aria-current="page">
                <button className="inline-block px-6 py-2 m-2 sm:m-0 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none">
                  PFL
                </button>
              </Link>
              <Link to="/employment" className="" aria-current="page">
                <button className="inline-block px-6 py-2 m-2 sm:m-0 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none">
                  UnEmployment
                </button>
              </Link>
              <Link to="/withholding" aria-current="page">
                <button className="inline-block px-6 py-2 m-2 sm:m-0 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-600 rounded shadow ripple hover:shadow-lg hover:bg-indigo-800 focus:outline-none">
                  Withholding
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center  justify-center sm:justify-between px-4 py-3 bg-white sm:px-6 ">
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
            {/* <StatsGroup
              onClicked={handleClicked}
              actions={bills}
              newBills={counters.newBill}
              failedBills={counters.failedBill}
              passBills={counters.signedGov}
              billTotal={openStateQuery.length}
              majorCount={count.major}
              currentPage={pageState.currentPage}
              pageSize={pageState.pageSize}
           />*/}

            <div className="inline-flex mb-6 sm:m-0 justify-center text-sm leading-none text-gray-500 bg-gray-200 border-2 border-gray-200 rounded-full md:flex">
              <button
                onClick={(e) => handleSwitchView(e)}
                className="inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-l-full focus:outline-none hover:text-blue-400 focus:text-blue-400 active"
                id="card"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2 fill-current"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span>Grid</span>
              </button>
              <button
                onClick={(e) => handleSwitchView(e)}
                className="inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-r-full focus:outline-none hover:text-blue-400 focus:text-blue-400"
                id="table"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2 fill-current"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
                <span>Table</span>
              </button>

              <CSVLink
                data={csvFile}
                headers={headers}
                filename={'paid_leave_report.csv'}
                onClick={handleDownloadButtonClick}
                className="inline-flex items-center px-4 py-2 transition-colors duration-300 ease-in rounded-r-full focus:outline-none hover:text-blue-400 focus:text-blue-400"
              >
                <svg
                  className="w-4 h-4 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Report</span>{' '}
              </CSVLink>
            </div>

            <Pagination
              itemsCount={state.bills.length}
              pageSize={pageState.pageSize}
              onPageChange={handlePageChange}
              currentPage={pageState.currentPage}
            />
          </div>
        </div>
        {renderView()}
        <Pagination
          itemsCount={state.bills.length}
          pageSize={pageState.pageSize}
          onPageChange={handlePageChange}
          currentPage={pageState.currentPage}
        />
      </div>
    </>
  )
}

export default DisplayList
