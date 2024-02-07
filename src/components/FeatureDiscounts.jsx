import Card from "./Card";

import image1 from "../assets/images/image-1.avif";
import botImage1 from "../assets/images/bot-img-1.avif";
import botImage2 from "../assets/images/bot-img-2.avif";
import botImage3 from "../assets/images/bot-img-3.avif";
import botImage4 from "../assets/images/bot-img-4.avif";
import botImage5 from "../assets/images/bot-img-5.avif";

const FeatureDiscounts = () => {
  return (
    <article>
      <h3 className="text-lg font-light">Feature Discounts</h3>
      <div className=" grid grid-cols-6 gap-8 h-96 max-w-6xl mt-4">
        <Card image={image1} title="Game Name" />
        <Card image={botImage1} title="Other Game" />
        <Card image={botImage2} title="Game 3 title" />
        <Card image={botImage3} title="Game 3 title" />
        <Card image={botImage4} title="Game 3 title" />
        <Card image={botImage5} title="Game 3 title" />
      </div>
    </article>
  );
};
export default FeatureDiscounts;
