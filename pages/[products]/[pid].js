import React,{useContext} from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../../UserContext'
import ProductDetailAltv2 from '../../components/ProductDetailAltv2';


const pid = (props) => {
  const router = useRouter();
  console.log('rtrqry',router.query);
  const users = useContext(UserContext);
  console.log('usersss',users);
  
  
  const matchProduct = (product) => {
  // return product.id === users[0].id
  return product.id === users[`${router.query.pid - 1}`].id
}
  let filtered = users.filter(matchProduct);
  console.log('filtered',filtered)

    return (
      
       
      <div style={{paddingTop:'0.5vh'}}>
     
  {/* <h1>{filtered[0].name}</h1>
  <h5>sorry musthaf problems</h5> */}

  <ProductDetailAltv2 users={users} filtered={filtered}/>
      </div> 
    )
}

export default pid
