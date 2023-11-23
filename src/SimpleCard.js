import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Imag";

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
