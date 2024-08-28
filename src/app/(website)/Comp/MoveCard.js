import React from "react";
import Image from "next/image";
import "./moveCard.scss";

const MoveCard = () => {
  return (
    <div className="slider w-full mt-16">
      <div className="slide-track">
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height={100}
            width={600}
            alt="Slide 1"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height={100}
            width={600}
            alt="Slide 2"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height={100}
            width={600}
            alt="Slide 3"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height={100}
            width={600}
            alt="Slide 4"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height={100}
            width={600}
            alt="Slide 5"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height={100}
            width={600}
            alt="Slide 6"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height={100}
            width={600}
            alt="Slide 7"
          />
        </div>
        {/* Duplicate slides for seamless scrolling */}
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height={100}
            width={600}
            alt="Slide 1"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height={100}
            width={600}
            alt="Slide 2"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            height={100}
            width={600}
            alt="Slide 3"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            height={100}
            width={600}
            alt="Slide 4"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            height={100}
            width={600}
            alt="Slide 5"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            height={100}
            width={600}
            alt="Slide 6"
          />
        </div>
        <div className="slide">
          <Image
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            height={100}
            width={600}
            alt="Slide 7"
          />
        </div>
      </div>
    </div>
  );
};

export default MoveCard;
