import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NewsArticle({ data }) {
  return (
    <ReactBootstrap.Carousel.Item>
      <a href={data.url}>
        <img
          className="d-block w-45"
          src={data.urlToImage}
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
          <h4 style={{ fontStretch: 'ultra-condensed', WebkitTextStrokeColor: 'black', WebkitTextStrokeWidth: '1px', fontSize: '2.5vw' }}>
            {data.title}
          </h4>
        </div>
      </ReactBootstrap.Carousel.Caption>
    </ReactBootstrap.Carousel.Item>
    // <div className="news">
    //   <h1 className="news__title">{data.title}</h1>
    //   <p className="news__desc">{data.description}</p>
    //   <span className="news__author">{data.author}</span> <br />
    //   <span className="news__published">{data.publishedAt}</span>
    //   <span className="news__source">{data.source.name}</span>
    // </div>
  );
}

export default NewsArticle;