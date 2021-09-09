import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import slide from '../../assets/slide.jpg'
import slide2 from '../../assets/slide2.JPG'
import slide3 from '../../assets/slide3.jpg'
import styles from './styles.module.css';

const Slider = () => {
  return (
    <div className={styles.carousel}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
