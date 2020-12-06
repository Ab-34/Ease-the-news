import React, { useContext } from "react";
import { NewsContext } from "./Get_News";
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
  const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <ReactBootstrap.Carousel>
        {/* {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"} */}
        <ReactBootstrap.Carousel.Item>
          <a href={data ? data.articles[0].url : "Loading"} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-45"
              src={data ? data.articles[0].urlToImage : "Loading"}
              alt="Pic-1"
              style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%', height: 'auto' }}
            />
          </a>
          <ReactBootstrap.Carousel.Caption style={{
            textAlign: 'center',
            width: '45vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div>
              <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '2.5vw' }}>
                {data ? data.articles[0].title : "Loading"}
              </h4>
            </div>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
          <a href={data ? data.articles[1].url : "Loading"} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-45"
              src={data ? data.articles[1].urlToImage : "Loading"}
              alt="Pic-1"
              style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%', height: 'auto' }}
            />
          </a>
          <ReactBootstrap.Carousel.Caption style={{
            textAlign: 'center',
            width: '45vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div>
              <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '2.5vw' }}>
                {data ? data.articles[1].title : "Loading"}
              </h4>
            </div>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
          <a href={data ? data.articles[2].url : "Loading"} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-45"
              src={data ? data.articles[2].urlToImage : "Loading"}
              alt="Pic-1"
              style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%', height: 'auto' }}
            />
          </a>
          <ReactBootstrap.Carousel.Caption style={{
            textAlign: 'center',
            width: '45vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div>
              <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '2.5vw' }}>
                {data ? data.articles[2].title : "Loading"}
              </h4>
            </div>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
          <a href={data ? data.articles[3].url : "Loading"} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-45"
              src={data ? data.articles[3].urlToImage : "Loading"}
              alt="Pic-1"
              style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%', height: 'auto' }}
            />
          </a>
          <ReactBootstrap.Carousel.Caption style={{
            textAlign: 'center',
            width: '45vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div>
              <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '2.5vw' }}>
                {data ? data.articles[3].title : "Loading"}
              </h4>
            </div>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
          <a href={data ? data.articles[4].url : "Loading"} target="_blank" rel="noopener noreferrer">
            <img
              className="d-block w-45"
              src={data ? data.articles[4].urlToImage : "Loading"}
              alt="Pic-1"
              style={{ marginRight: 'auto', marginLeft: 'auto', width: '45%', height: 'auto' }}
            />
          </a>
          <ReactBootstrap.Carousel.Caption style={{
            textAlign: 'center',
            width: '45vw',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div>
              <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '2.5vw' }}>
                {data ? data.articles[4].title : "Loading"}
              </h4>
            </div>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
      </ReactBootstrap.Carousel>
    </div>
  );
}

export default News;