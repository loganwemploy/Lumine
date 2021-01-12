import React from 'react'
import styled from 'styled-components';
const StyledDynamicCheckBoxes = styled.div`
  max-width: 20vw;
.container {
  margin-top: 0px; 
}
P {
  margin: 0px;
}

.posts h6 {
    color: #666;
    margin-top: 5px;
    
}

.posts ul {
  margin:0px 0px 6px 0px;
  font-size: 14px;
}

.post {
    flex: 1;
    min-width: 1px;
}

.posts > .row {

  border-bottom: none;
  /*border-top: solid 1px #d5dbdd;*/
  border: 1px solid #dedfe0;
  border-radius: 2px 2px 0 0;
  margin-bottom: 20px;
}

img {
   vertical-align: middle;
   max-width: 200px;
   max-height: 160px;
}

.service-ad{
    border: 1px solid #dedfe0;
    border-radius: 2px 2px 0 0;
    margin-bottom: 20px;
    position: relative;
    min-height: 148px;
    display: flex;
}

.service-ad.cupon{
   border: 2px solid #dedfe0;
   border-style: dashed !important;
}

.ad-img {
  margin-top: 5px;
  margin-left: 5px;
}
.ad-body {
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 8px;
}

.price-info {
    position: absolute;
    top: 15px;
    right: 20px;
}

.price-info {
    font-size: 18px;
    font-weight: 700;
    color: #29303b;
}

.disclosure {
    font-size: 13px;
    color: #505763;
    padding: 0;
}

.btn-buy {
  display:block;
}

.posts h4 {
    font-size: 17px;
    font-weight: 700;
    color: #29303b;
    margin: 0;
    padding: 0;
    line-height: 18px;
}

.fx {
    flex: 1;
    min-width: 1px;
}

.checked {
    color: orange; 
}

.rating {
      margin-top:6px;
      font-size: 12x;
      line-height: 1.2; 
}

.rating {
    float: right;
    color: #686f7a;
}

.rating-word {
    display:inline-block;
    font-size: 14px;
    color: #686f7a;
    font-weight: 400;
    margin-left:0px;
    padding-buttom: 2px;
}

.price{
  display:block;
  margin-left: 100px;
}

.left-search-box {
    margin: -1.31em 0 0 0;
    padding: 10px;
    background-color: #eee;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 3px;
    min-width: 260px;
    max-width: 260px;
    

}
.left-search-box.search-box-static {
      min-height: 175px;
      max-height: 175px;
}
.left-search-box.search-box-dynamic {
    min-height: 405px;
  height: 30em;
}

.sidebar {
  padding-left: 10px !important;
}

.left-search-box select {
  margin: 10px 0px 10px 0px; 
}

.left-search-box button {
   float:right;
   margin-right: 5px;
}

.search-by-price-range {
  margin-bottom: 5px;
}

.search-by-price-range input,
.search-by-price-range button {
   display: inline;
   margin-bottom: 10px;
}

.search-by-price-range input {
  max-width: 60px;
}

.left-search-box h6 {
    color: #76777e;
}

.candle-checkboxes {
    width: 255px;
    overflow: auto;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 0;
    position: relative;
    margin-bottom: 10px; 
    position: relative;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ccc;
    width: 220px;
    padding: 5px 5px 5px 10px;
}

.row.bottom-pagination {
   border: none !important;
}


`;

const DynamicCheckBoxes = () => {
    return (
        <StyledDynamicCheckBoxes>
            <div className="container" style={{width:'100%',padding:'0'}}>
            <div className="row" style={{margin:'0 0 0 -0.5em'}}>
        <div className="col-lg-3 col-md-3 col-sm-3 sidebar" style={{width:'100%',padding:'0'}}>
        <div className="left-search-box search-box-static input-group-sm mx-auto" style={{position:'absolute',zIndex:'99999'}}>
          <h6>Search</h6>
            <select className="form-control"> 
               <option>All Categories</option>
                    <option value="d597">Classic Collection</option> 
                    <option value="d600">Floral Collection</option> 
                    <option value="d30w">Winter Collection</option>
                    <option value="32">Limited Edition Collection</option>
                    <option value="d33">Candle of the Month</option>
            </select>
           <select className="form-control"> 
               <option>All Candles</option>
                    <option value="d597">Limoncello</option> 
                    <option value="d600">Vanilla Sugar Cookie</option> 
                    <option value="d30w">Eucalyptus Mint</option>
                    <option value="d33">Cinnamon Dolce</option>
                    <option value="d97">Champagne Rose</option>
                    <option value="d598">Cherry Blossom</option> 
                    <option value="d599">Lavender Bliss</option> 
                    <option value="d599">White Gardenia</option> 
                    <option value="d599">Candy Cane</option> 
            </select>
           <button type="button" className="btn btn-outline-success btn-sm">Search</button>
        </div>
        <div className="left-search-box search-box-dynamic input-group-sm mx-auto">
           <h6>Price</h6>
          <div className="search-by-price-range input-group-sm">
            <input type="text" className="form-control" placeholder="From"/> -
            <input type="text" className="form-control" placeholder="To"/>
            <button type="button" className="btn btn-outline-success btn-sm">Update</button>
          </div>
           <div className="form-check">
  
  </div>
          <h6>Candle Categories</h6>
          <div className="candle-checkboxes" style={{marginTop:'32%'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',margin:'1em 0 0 -1em'}} >
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Limoncello</span>
                       <span>(7)</span> 
                </label>
           </div>
            <div style={{display:'flex',flexDirection:'column',alignContent:'flex-start'}}>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em'}}>
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>CherryBlossom</span>
                       <span>(14)</span> 
                </label>
            </div>
                        <div>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em '}} >
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Van sugarcookie</span>
                       <span>(7)</span> 
                </label>
           </div>
            <div>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em '}}>
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Alloy Wheels</span>
                       <span>(14)</span> 
                </label>
            </div>
                        <div>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em '}} >
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Adaptive Cruise Control</span>
                       <span>(7)</span> 
                </label>
           </div>
            <div>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em '}}>
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Alloy Wheels</span>
                       <span>(14)</span> 
                </label>
            </div>            <div>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em '}} >
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Adaptive Cruise Control</span>
                       <span>(7)</span> 
                </label>
           </div>
            <div>
                <label style={{display:'flex',gap:'0.1em',width:'12em',justifyContent:'flex-start',marginLeft:'-1em '}}>
                   <input type="checkbox" />
                     <span style={{fontSize:'12px',minWidth:'10vw'}}>Alloy Wheels</span>
                       <span>(14)</span> 
                </label>
            </div>
  </div>
          <button type="button" className="btn btn-outline-success btn-sm" style={{position:'absolute', zIndex:'9999999',left:'13.1em'}}>Update</button>
        </div>
    </div>
         <div className="col-lg-9 col-md-7 col-sm-12 posts">
           <div className="row search-engine justify-content-between" style={{background:'#17a2b8', padding: '5px 0px 0px 0px', border: 'none',width:'19.2vw',position:'relative',left:'-33.5%'}}>
             
           </div>

         
          
          
                 
          
        </div>
     </div>
</div>
        </StyledDynamicCheckBoxes>
    )
}

export default DynamicCheckBoxes
