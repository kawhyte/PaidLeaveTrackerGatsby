import React from 'react'
import Hero from "../components/hero"
import Layout from "../components/layout"
import CardList from "../components/cardList"

const IndexPage = () => {

  // const [bill, setBill] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   let cancel;
  //   axios
  //     .get("https://paidleavetracker.herokuapp.com/track", {
  //       cancelToken: new axios.CancelToken(c => (cancel = c))
  //     })
  //     .then(res => {
  //       // setBill(res.data.map(bill => bill.bill_id));
  //       setBill(res.data);
  //       setLoading(false);
  //     });

  //   return () => {
  //     cancel();
  //   };
  // }, [])







  return ( 
  <div  className="Roboto">




<Layout> 
<Hero /> 

<CardList> </CardList>
  
</Layout>
   
  </div>


)
  
}

export default IndexPage
