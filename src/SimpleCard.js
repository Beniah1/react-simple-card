import React from 'react';
import Title from './Title';
import Description from './Description';
import Image from './Imag';
import '../src/simplecard.css'; // Import the CSS file

const SimpleCard = () => {
  return (
    <div className="simple-card">
      <div className="text1">
        <div className="img1">
          <Image url="pics/frontpage.png" alt="" width="180" />
        </div>
        <Title text="Billy Gates" /> {/* Use the Title component */}
        <h2 className="text-h2">Amazoni su</h2>
        <Description text="I am Amazon su" /> {/* Use the Description component */}
        <p className="text-p2">
          Lorem ipsum dolor,sit amet consectetur adip isicing elit.
        </p>
        <button className="btnn">HOWDIY</button>
      </div>
    </div>
  );
};

export default SimpleCard;