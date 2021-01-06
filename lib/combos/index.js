import Hero from "../../components/Hero";
import SideMenu from "../../components/SideMenu";
import ThankYou from "../../components/ThankYou";

const thankYouForOrder = (
  <>
    <div className="side" style={{ display: "flex", flexWrap: "nowrap" }}>
      <div>
        <SideMenu />
      </div>
      <div>
        <ThankYou />
      </div>
    </div>
  </>
);



export default {thankYouForOrder};
