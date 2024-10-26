import risevest from "@/assets/risevest.svg";
import bloccpay from "@/assets/bloccpay.png";
import chainstack from "@/assets/chain-stack.png";
import nestcoin from "@/assets/nestcoin.png";

import "./Logos.scss";

const images = [risevest, bloccpay, chainstack, nestcoin];

function Logos() {
  return (
    <section className="c-logos mt-10 sm:mt-28 overflow-hidden flex justify-start lg:justify-center">
      <div className="flex gap-16 animation-wrapper">
        {images.map((image) => {
          return (
            <img src={image} alt="Partner Logo" className="h-7" key={image} />
          );
        })}

        {images.map((image) => {
          return (
            <img
              src={image}
              alt="Partner Logo"
              className="h-7 lg:hidden"
              key={`${image}-2`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Logos;
