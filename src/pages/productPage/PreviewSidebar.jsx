import fifaLogo from "../../assets/images/fifa-1/fifa-0.avif";
import PreviewSidebarTab from "./PreviewSidebarTab";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

const PreviewSidebar = () => {
  return (
    <div className="flex flex-col gap-4">
      <img src={fifaLogo} alt="" className=" p-16" />
      <div className="py-1 px-2 bg-gray-800 text-xs w-fit rounded-md">
        <p>BASE GAME</p>
      </div>
      <p>$69.99</p>
      <div className="flex flex-col gap-2 uppercase">
        <button className=" bg-epicBlue p-3 rounded-md">Add to Cart</button>
        <button className=" border p-3 rounded-md">Buy Now</button>
        <button className=" border p-2 text-sm rounded-md">
          Add to wishlist
        </button>
      </div>
      {/* <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} /> */}
      <PreviewSidebarTab leftText="Epic Rewards" rightText="Earn 5% Back" />
      <PreviewSidebarTab leftText="Refund Type" rightText="Self Refundable" />
      <PreviewSidebarTab leftText="Developer" rightText="EA Canda" />
      <PreviewSidebarTab leftText="Publisher" rightText="Electronic Arts" />
      <PreviewSidebarTab leftText="Release Date" rightText="09/29/23" />
      <PreviewSidebarTab leftText="Platform" rightText="" />
    </div>
  );
};
export default PreviewSidebar;
