import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from '../Assets/1.jpg';
import secondImg from '../Assets/2.jpg';
import thirdImg from '../Assets/3.jpg';

export default class CarouselBoxHk extends Component {
  render() {
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Carousel style={{width: '75%'}}>
          <Carousel.Item>
                <img 
                className='d-block w-100'
                src={firstImg}/>
          </Carousel.Item>
          <Carousel.Item>
                <img 
                className='d-block w-100'
                src={secondImg}/>
          </Carousel.Item>
          <Carousel.Item>
                <img 
                className='d-block w-100'
                src={thirdImg}/>
          </Carousel.Item>
      </Carousel>
    </div>
    )
  }
}