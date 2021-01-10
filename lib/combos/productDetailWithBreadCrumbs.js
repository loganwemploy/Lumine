import BreadCrumbs from "../../components/BreadCrumbs";
import ProductDetailAltv2 from "../../components/ProductDetailAltv2";


const productDetailWithBreadCrumbs = (
    <div style={{display: "flex",flexDirection:'column'}}>
    <div>
     <BreadCrumbs />
    </div>
    <div>
     <ProductDetailAltv2 />
    </div>
  </div>
  )

  export default productDetailWithBreadCrumbs;