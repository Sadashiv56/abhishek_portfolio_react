import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pizza Delivery App & Order Pizza',
    github: 'https://github.com/Sadashiv56',
    demo: 'https://github.com/Sadashiv56'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Responsive Portfolio',
    github: 'https://github.com/Sadashiv56',
    demo: 'https://github.com/Sadashiv56'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Industry Website',
    github: 'https://github.com/Sadashiv56',
    demo: 'https://github.com/Sadashiv56'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Realtime Chat App',
    github: 'https://github.com/Sadashiv56',
    demo: 'https://github.com/Sadashiv56'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Notes App',
    github: 'https://github.com/Sadashiv56',
    demo: 'https://github.com/Sadashiv56'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Book Store App',
    github: 'https://github.com/Sadashiv56',
    demo: 'https://github.com/Sadashiv56'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
}

export default Portfolio;
