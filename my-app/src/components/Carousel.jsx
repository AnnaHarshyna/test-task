import React from 'react';
import PropTypes from 'prop-types';
import './Carousel.css';

export class Carousel extends React.Component {
  state = {
    currentPosition: 0,
  }

  showNext = () => {
    const { images, imageWidth, imagesDisplayed } = this.props;
    const maxLength = (images.length - imagesDisplayed) * imageWidth;

    this.setState(state => ({
      currentPosition: state.currentPosition - imageWidth < -maxLength
        ? -maxLength
        : state.currentPosition - imageWidth,
    }));
  }

  showPrevious = () => {
    const { imageWidth } = this.props;

    this.setState(state => ({
      currentPosition: state.currentPosition + imageWidth > 0
        ? 0
        : state.currentPosition + imageWidth,
    }));
  }

  render() {
    const { images, imageWidth, animationDuration } = this.props;

    return (
      <div
        className="carousel"
        style={{ width: `${imageWidth}px`}}
      >
        <ul
          className="carousel__list"
          style={{
            transform: `translateX(${this.state.currentPosition}px)`,
            transitionDuration: `${animationDuration}ms`,
          }}
        >
          {images.map((image, index) => (
            <li
              key={image}
              style={{ width: `${imageWidth}px` }}
            >
              <img src={image} alt={index} />
            </li>
          ))}
        </ul>
        <div className="carousel__buttons">
          <button
            type="button"
            className="btn"
            onClick={this.showPrevious}>
            <i class="fas fa-angle-left"></i>
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.showNext}>
            <i class="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  imagesScrolled: PropTypes.number,
  imageWidth: PropTypes.number.isRequired,
  animationDuration: PropTypes.number,
};
