import risevest from "@/assets/risevest.svg";
import bloccpay from "@/assets/bloccpay.png";
import chainstack from "@/assets/chain-stack.png";
import nestcoin from "@/assets/nestcoin.png";

import "./Logos.scss";

const images = [risevest, bloccpay, chainstack, nestcoin];

function Logos() {
  return (
    <section className="c-logos mt-10 sm:mt-28 overflow-hidden flex justify-center">
      <div className="flex gap-16 animation-wrapper">
        {images.map((image) => {
          return <img src={image} alt="Partner Logo" className="h-7" />;
        })}

        {images.map((image) => {
          return (
            <img src={image} alt="Partner Logo" className="h-7 lg:hidden" />
          );
        })}
      </div>
    </section>
  );
}

export default Logos;
