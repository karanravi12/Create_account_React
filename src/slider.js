import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475',
      'https://m.economictimes.com/thumb/msid-97595284,width-5000,height-3333,resizemode-4,imgsize-268882/rollercoaster-week-sees-11-bse-500-stocks-give-double-digit-returns-itc-among-them.jpg',
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/e6b515a63b93c39c7a87',
    ],
    currentImageIndex: 0,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
  }

  handleNextClick() {
    const { currentImageIndex, images } = this.state;
    if (currentImageIndex === images.length - 1) {
      this.setState({ currentImageIndex: 0 });
    } else {
      this.setState({ currentImageIndex: currentImageIndex + 1 });
    }
  }

  handlePrevClick() {
    const { currentImageIndex, images } = this.state;
    if (currentImageIndex === 0) {
      this.setState({ currentImageIndex: images.length - 1 });
    } else {
      this.setState({ currentImageIndex: currentImageIndex - 1 });
    }
  }

  handleDotClick(index) {
    this.setState({ currentImageIndex: index });
  }

  render() {
    const { images, currentImageIndex } = this.state;
    const currentImage = images[currentImageIndex];
    const dots = images.map((image, index) => (
      <button
        key={index}
        onClick={() => this.handleDotClick(index)}
        className={`slider-dot ${index === currentImageIndex ? 'active' : ''}`}
      ></button>
    ));
    return (
      <div className="slider">
        <img src={currentImage} alt="" className="slider-image" />
        <div className="slider-buttons">
         
          {dots}
          
        </div>
      </div>
    );
  }
}

export default Slider;
