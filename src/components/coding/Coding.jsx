import React from 'react'
import Screenshot1 from '../../assets/gens_playlist.png'
import Screenshot2 from '../../assets/react_portfolio.png'
import Screenshot3 from '../../assets/trivia.png'
import Screenshot4 from '../../assets/witch_trials.png'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./coding.css"

const Coding = () => {
  const projects = [
    {
      id: 1,
      title: "Gen's Playlist",
      link: 'https://github.com/oliviazhaoxu/playlist',
      text: 'Gen used to work as a professional music journalist, and I have subscribed to her weekly music newsletter since day one. Her recommendations greatly shaped my taste in music, and I want to share it with more people. So, after obtaining her permission, I created this website for her, and for everyone who craves the company of music.',
      screenshot: Screenshot1
    },

    {
      id: 2,
      title: "My React Portfolio Website",
      link: 'https://github.com/oliviazhaoxu/my-react-portfolio',
      text: 'A portfolio website to showcase my journalist work, including audio, photo, and coding projects. Created by React.',
      screenshot: Screenshot2
    },

    {
      id: 3,
      title: "Trivia Quiz",
      link: 'https://github.com/UCB-INFO-FRONTEND-WEBARCH/final-project-AnkitaShanbhag30',
      text: 'For the final project of my class Front-End Web Architecture this semester, me and my team built a trivia quiz website using HTML/CSS/JavaScript/React.',
      screenshot: Screenshot3
    },

    {
      id: 4,
      title: "Jupyter Notebook: Analyzing Witch Trials",
      link: 'https://github.com/oliviazhaoxu/J233-FINAL-PROJECT-WITCH-TRIALS',
      text: 'For the final project of my class J233 Advanced Coding for Journalists, I analyzed the data of witch trials across Europe.',
      screenshot: Screenshot4
    },

  ]
  return (
    <section id='coding'>
      <h1>Coding/Design Projects</h1>

      <Swiper className='container coding__container'
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          projects.map(({id, title, link, text, screenshot})=> {
            return (
              <SwiperSlide>
                <div key={id} className="coding__project">
                  <div className='screenshot'>
                    <img src={screenshot} />
                  </div>
                  <a href={link} target="_blank"><h2>{title}</h2></a>
                  <p>{text}</p>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Coding