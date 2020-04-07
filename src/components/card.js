import React from 'react'
import { Link } from 'gatsby'
import addDays from 'date-fns/addDays'
import  differenceInDays from 'date-fns/differenceInDays'
import  parseJSON from 'date-fns/parseJSON'

// let differenceInCalendarDays = require("date-fns/differenceInCalendarDays");
// let date = require("date-fns");
// let add = require("date-fns/add")
// //var addDays = require('date-fns/addDays')
// // var formatDistance = require("date-fns");
//  let parseJSON = require("date-fns/parseJSON");

const Card = ({ title, identifier, jurisdiction, createdAt, sources, actions  }) => {

 ////LOGIC TO CHECK IF BILL IS NEW //////
let futureDate = addDays(new Date(Date.now()), 7)
 let billDateDifference = differenceInDays(
    futureDate,
    new Date(parseJSON("2020-04-03 11:02:32.289671+00:00"))
  );

 ///LOGIC TO CHECK IF BILL IS IMPORTANT //////
 let   isMajorUpdate = actions.some(
      value =>
        value.classification.includes("withdrawal") ||
        value.classification.includes("failure") ||
        value.classification.includes("became-law") ||
        value.classification.includes("amendment-passage") ||
        value.classification.includes("amendment-failure") ||
        value.classification.includes("executive-receipt") ||
        value.classification.includes("executive-signature") ||
        value.classification.includes("executive-veto") ||
        value.classification.includes("executive-veto-line-item") ||
        value.classification.includes("veto-override-passage") ||
        value.classification.includes("veto-override-failure") ||
        Object.values(value.description).includes("governor") ||
        Object.values(value.description).includes("executive") 
    );

 console.log("importantValue ", jurisdiction, identifier, isMajorUpdate)


  return (

<div className="div1 container ">
  <article className="mw6 center bg-white br3 pa3 pa0-ns mv3 ba b--black-20 shadow-5">
    <div className="vh-10 dt w-100 tc b--black-20">

    <div className="tc mt3">
    <img src={"https://res.cloudinary.com/babyhulk/image/upload/v1584505244/flags/Flag_of_" + jurisdiction}  alt= {"Flag of" + jurisdiction} className="br2 h3 w3 dib" title={"Flag of " + jurisdiction} ></img>
  <h1 className="f4">{jurisdiction} - {identifier}</h1>
    <span>
   {billDateDifference > -7714 ? <a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-light-yellow">New</a> : " "} { isMajorUpdate ? <a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-washed-green">Major Update</a> : " "}
   </span>
    <hr className="mw3 bb bw1 b--black-10" />
    </div>

    </div>

    <div>
        <article className="w-100 pa0 bg-black-10">

            <div className=" bg-white black w-100 mt1 ph0 pv0">
                <div className="w-100 pb3 bb b--light-gray flex items-center justify-between">

                        <div className="pt2 f3-m fw5 white">
                                
                        <h3 className="tc f4 f4-m measure-narrow lh-title mv0 bg-black-10 center">
                            <span className="$
                              data.statusColor
                             lh-copy black pa1 tracked-tight tc">
                             {actions[actions.length - 1].description}
                            </span>
                          </h3>
                   
                            <div className="pt3 pl3 pr3 w-100 dt dt--fixed bg-black-50 flex items-center justify-between">
                            <span> <a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy tc bg-light-yellow" style={{width: 100}}>Introduced</a></span>
                            <span>&#8594;</span>
                            <span> <a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-light-yellow tc "style={{width: 100}}>House</a></span>
                            <span>&#8594;</span>
                            <span> <a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-light-yellow tc "style={{width: 100}}>Senate</a></span>
                            <span>&#8594;</span>
                            <span> <a className="f6 grow no-underline br-pill ph2 pv1 mb2 dib navy bg-light-yellow tc "style={{width: 100}}>Governor</a></span>
                        



                           </div>
                     
                                
                        



                            <div className="pt1 pl3 pr3 w-100 dt dt--fixed bg-red">
                       
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
