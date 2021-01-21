import React, {useContext} from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { UserContext } from '../UserContext'

const StyledProducts = styled.div`
  
`;

const Products = ({m,extractID}) => {
    const users = useContext(UserContext);
    return (
        <StyledProducts>
             <Link as={`/${m.category}/${m.id}`} href="/[products]/[pid]">
              <a onClick={()=>{extractID(m)}}  className="product" href="#" style={{minWidth:'23vw',width:'100%'}}>
					<div className="product-image">
						<img style={{minWidth:'100%'}} src={m.image} />
					</div>
					<div className="product-content">
						<div className="product-info">
							<h2 className="product-title">{m.name}</h2>
							<p className="product-price">${`${m.price*0.01}`}</p>
							<p className="product-price">{m.description}</p>
							<p className="product-price" style={{color:'#04f'}}>{m.category} collection</p>
              <button  onClick={()=>{extractID(m)}} className="product-price" style={{borderRadius:'1.23em',backgroundColor:'#222',color: '#efefef'}}><i className="material-icons-outlined">shopping_cart</i>&nbsp;Add&nbsp;To&nbsp;Cart</button>
              </div>
              
{/* brand:"lumi candle boutique",
category: "classic",
description: "a crisp and delicious eucalyptus mint candle to promote relaxation and a whole center",
price:1499,
countInStock:4} */}
						</div>
        </a>
            
</Link>
        </StyledProducts>
    )
}

export default Products
