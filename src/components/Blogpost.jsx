import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Blogpost.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Righttop from './Righttop';



function Blogpost() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3, // Display 3 items on super large desktop
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Display 2 items on desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // Display 1 item on tablet
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Display 1 item on mobile
    },
  };

  const blogItems = [
    {
      title: 'Blog Post 1',
      image: './images/post1.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac justo ac lorem ultricies tincidunt.',
    },
    {
      title: 'Blog Post 2',
      image: './images/post1.png',
      content:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    },
    {
      title: 'Blog Post 3',
      image: './images/post1.png',
      content:
        'Duis tincidunt nec massa in auctor. Sed id suscipit libero.',
    },
    // Add more blog items as needed
  ];

  return (
    <>
   <Righttop />
    <div className="blog-container">
      <Carousel responsive={responsive} infinite>
        {blogItems.map((item, index) => (
          <div className="blog-item" key={index}>
            <img src={item.image} alt={item.title}  />
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </>
  );
}

export default Blogpost;
