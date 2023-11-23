import React, { Component } from "react";
import Title from "../react-simple-card/Title";
import Description from "../react-simple-card/Description";
import Image from "../react-simple-card/Imag";

class SimpleCard extends Component {
  render() {
    const { title, description, imageUrl } = this.props;

    return (
      <div className="simple-card">
        <Title text={title} />
        <Description text={description} />
        <Image url={imageUrl} />
      </div>
    );
  }
}

export default SimpleCard;
