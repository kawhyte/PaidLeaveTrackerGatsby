import React from 'react'
import { Link } from 'gatsby'

// let differenceInCalendarDays = require("date-fns/differenceInCalendarDays");
// let add = require("date-fns");
// var formatDistance = require("date-fns");
// var parseJSON = require("date-fns/parseJSON");

const Card = ({ title, identifier, jurisdiction, createdAt, sources, actions  }) => {



//   // Client-side Runtime Data Fetching
//   const [createdAt2, setStarsCount] = useState(false)
//   useEffect(() => {
//   ////LOGIC TO CHECK IF BILL IS NEW //////
//    var futureDate = add.add (new Date(Date.now()), {
//     days: 1,
//     hours: 2,
//     minutes: 9,
//     seconds: 30
//   });
//   // console.log("future date ", futureDate)
//   // console.log("createdAt2 ", createdAt2)
//   // console.log("add.parseJSON(createdAt) ", add.parseJSON(createdAt2))
//   var result = add.differenceInCalendarDays(
//     futureDate,
//     new Date(add.parseJSON(createdAt))
//   );
//   console.log("result ", result)

//   //   return () => {
//   //     cancel();
//   //   };
// if (result > 14) {
  
//     console.log("New?? ", identifier) 
 
//   }
 
//   }, [])


//  console.log("RESULTTTTS ", createdAt2)











   ////LOGIC TO CHECK IF BILL IS NEW //////
  //  var futureDate = add (new Date(Date.now()), {
  //   days: 1,
  //   hours: 2,
  //   minutes: 9,
  //   seconds: 30
  // });

  // var result = differenceInCalendarDays(
  //   futureDate,
  //   new Date(parseJSON(createdAt))
  // );

  // console.log("future date ", futureDate)
  // console.log("created date  - future date ", result)

  // if (result > 14) {
  //   console.log("New?? ", identifier) 
 
  // }

// console.log("Today ", (Date.now()))
// console.log("createdAt ", (new Date(createdAt)))






  return (

<div className="div1 container ">
  <article className="mw6 center bg-white br3 pa3 pa0-ns mv3 ba b--black-20 shadow-5">
    <div className="vh-10 dt w-100 tc b--black-20">

    <div className="tc mt3">
    <img src={"https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_" + jurisdiction}  alt= {"Flag of" + jurisdiction} className="br2 h3 w3 dib" title={"Flag of " + jurisdiction} ></img>
  <h1 className="f4">{jurisdiction} - {identifier}</h1>
    <span>
      data.isBillNew? '<a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-light-yellow">New</a>': ""data.isLastUpdateImportant ? '<a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-washed-green">Major Update</a>': ""
   </span>
    <hr className="mw3 bb bw1 b--black-10" />
    </div>

    </div>

    <div>
        <article className="w-100 pa0">

            <div className=" bg-white black w-100 mt1 ph0 pv0">
                <div className="w-100 pb3 bb b--light-gray flex items-center justify-between">

                        <div className="pt2 f3-m fw5 white">
                                
                        <h3 className="tc f4 f4-m measure-narrow lh-title mv0">
                            <span className="$
                              data.statusColor
                             lh-copy black pa1 tracked-tight">
                             {actions[actions.length - 1].description}
                            </span>
                          </h3>
                   
                            <div className="pt3 pl3 pr3 w-100 dt dt--fixed">
                       
                                <div className={"dtc h1 black " +

actions.length ? "bg-green" : "bg-light-gray"  + "br1 br--left tc pr3"} 
                                 
                                >
                                    <small>Introduced</small></div>
                                <div className="dtc h1 black  
                                 br1 br--left tc" >
                                    <small>House</small></div>
                                <div className="dtc h1 black 
                              
                                br1 br--left tc" >
                                    <small>Senate</small></div>
                                <div className="dtc h1 black
                              
                                 br1 br--left tc" >
                                    <small>Gov</small></div>
                                <div className="dtc h1 bg-white o-30 br1 br--right"></div>
                            </div>



                            <div className="pt1 pl3 pr3 w-100 dt dt--fixed">
                       
                                <div className="dtc h1 black  br1 br--left tc" style={{width: 50}}>
                                    <small className= "f7 gray">{actions.date =
                                      actions.length > 0
                                        ? actions[0].date
                                         
                                        : "No data"}</small></div>
                                <div className="dtc h1 black br1 br--left tc" style={{width: 50}}>
                                    <small className= "f7 gray">
                                      houseDate.length > 0 
                                      houseDate.some
                                        d => d.actor === "lower"
                                     
                                        ? houseDate.date.substring
                                            0,
                                            10
                                         
                                        : " "
                                    </small></div>
                                <div className="dtc h1 black br1 br--left tc" style={{width: 50}}>
                                    <small className= "f7 gray" >
                                      senateDate.length > 0 
                                      senateDate.some
                                        d => d.actor === "upper"
                                      
                                        ? senateDate.date.substring
                                            0,
                                            10
                                          
                                        : " "
                                    </small></div>
                                <div className="dtc h1 black  br1 br--left tc" style={{width: 50}}>
                                    <small className= "f7 gray" >
                                      govDate.length > 
                                    govDate.some
                                        d => d.actor === "upper"
                                       ||
                                        govDate.some
                                          d =>
                                            d.actor ===
                                            "legislature"
                                         ||
                                        govDate.some
                                          d =>
                                            d.actor === "executive"
                                         ||
                                        govDate.some
                                          d =>
                                            d.type.includes ===
                                            "governor:signed"
                                       
                                        ? govDate.date.substring
                                            0,
                                            10
                                         
                                        : " "
                                    </small></div>
                                <div className="dtc h1 bg-white o-30 br1 br--right"></div>
                            </div>

                    </div>
                </div>

            </div>

            <div className="pt3 pl3 pb0">
            <small className="gray lh-title">Bill Title</small>
  <span className="f6 db pv1 pr3 truncate">{title}</span>
            </div>

            <div className="pt3 pl3 pb0">
            <small className="gray lh-title">Latest Action Date</small>
            <span className="f6 db pv1"><time>{actions[actions.length - 1].date}</time></span>
            </div>

           

            <div className="pt3 pl3 pb0">
            <small className="gray lh-title">State Website</small>

            
            </div>
            </article>
  </div>
    <div className=" pb3" > </div>
  </article>
</div>




  )
 
}

export default Card
