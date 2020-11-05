import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NewsBox extends Component {
    render() {
        return (
                <div class='Carousel'>
                    <ReactBootstrap.Carousel style={{width:'100vw', height:'auto'}}>
                        <ReactBootstrap.Carousel.Item>
                            <a href='https://www.businesstoday.in/buzztop/buzztop-corporate/reliance-future-retail-deal-amazon-won-in-singapore-but-will-it-win-in-india/story/420136.html'>
                                <img
                                    className="d-block w-45"
                                    src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/bt_buzz_collage_350_281020015345.jpg"
                                    alt="Pic-1"
                                    style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%' }}
                                />
                            </a>
                            <ReactBootstrap.Carousel.Caption style={{
                                textAlign: 'center',
                                width: '50vw',
                                marginLeft: 'auto',
                                marginRight: 'auto',                                
                                width: '40%'
                            }}>
                                <div>
                                    <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize:'2.5vw'}}>
                                        Amazon has the option of legal recourse to implement the order by Singapore International Arbitration Centre in India, but it is filled with hurdles
                            </h4>
                                </div>


                            </ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.Carousel.Item>
                        <ReactBootstrap.Carousel.Item>
                            <a href='https://www.businesstoday.in/buzztop/buzztop-corporate/reliance-future-retail-deal-amazon-won-in-singapore-but-will-it-win-in-india/story/420136.html'>
                                <img
                                    className="d-block w-45"
                                    src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/bt_buzz_collage_350_281020015345.jpg"
                                    alt="Pic-1"
                                    style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%' }}
                                />
                            </a>
                            <ReactBootstrap.Carousel.Caption style={{
                                textAlign: 'center',
                                width: '50vw',
                                marginLeft: 'auto',
                                marginRight: 'auto',                                
                                width: '40%'
                            }}>
                                <div>
                                    <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize:'2.5vw'}}>
                                        Amazon has the option of legal recourse to implement the order by Singapore International Arbitration Centre in India, but it is filled with hurdles
                            </h4>

                                </div>
                            </ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.Carousel.Item>
                        <ReactBootstrap.Carousel.Item>
                            <a href='https://www.businesstoday.in/buzztop/buzztop-corporate/reliance-future-retail-deal-amazon-won-in-singapore-but-will-it-win-in-india/story/420136.html'>
                                <img
                                    className="d-block w-45"
                                    src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/bt_buzz_collage_350_281020015345.jpg"
                                    alt="Pic-1"
                                    style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%' }}
                                />
                            </a>
                            <ReactBootstrap.Carousel.Caption style={{
                                textAlign: 'center',
                                width: '50vw',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: '40%'
                            }}>
                                <div>
                                    <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize:'2.5vw'}}>
                                        Amazon has the option of legal recourse to implement the order by Singapore International Arbitration Centre in India, but it is filled with hurdles
                            </h4>
                                </div>


                            </ReactBootstrap.Carousel.Caption>
                        </ReactBootstrap.Carousel.Item>
                    </ReactBootstrap.Carousel>
                </div>
        );
    }
}