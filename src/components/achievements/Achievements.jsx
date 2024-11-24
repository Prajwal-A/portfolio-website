import React from 'react'
import './achievements.css'
import AVT1 from '../../assets/Cloud computing.jpg'
import AVT2 from '../../assets/mathmania.jpg'
import AVT3 from '../../assets/Web Dev phaseshift_page-0001.jpg'
import AVT4 from '../../assets/PRAJWAL G ALEWOOR - Simulation Tools_page-0001.jpg'
import AVT5 from '../../assets/Prajwal G Alewoor - Deep Learning workshop Certificate_page-0001.jpg'
import AVT6 from '../../assets/11122021 Prajwal G Alewoor_page-0001.jpg'
import AVT7 from '../../assets/RapidMiner.png'
import AVT0 from '../../assets/CERTIFICATE_LANDING_PAGE~9K7UHXT8CHRG.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const data = [
  {
    avatar: AVT0,
    name: 'Completion of Coursera Deep Learning Specialization by Andrew Ng',
    review: 'Certified for completing 5 courses: 1. Structuring Machine Learning Projects, 2. Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, 3. Neural Networks and Deep Learning, 4. Sequence Models, 5. Convolutional Neural Networks'
    },
  {
  avatar: AVT1,
  name: 'NPTEL Elite Certificate',
  review: 'Certified for successfully completing Cloud Computing Course with a consolidated score of 76% from IIT Kharagpur'
  },
  {
  avatar: AVT2,
  name: 'Winner of Math Mania' ,
  review: 'Won 1st place in Math Mania event during the National Level Annual Technical Symposium Phase Shift 2021'
  },
  {
  avatar: AVT3,
  name: 'Web Development Course Completion' ,
  review: 'Participated in Web Develpment Seminar conducted during the National Level Annual Technical Symposium Phase Shift 2021'
  },
  {
  avatar: AVT4,
  name: 'Internship',
  review: 'Attended 2 week Online Internship on Simulation Tools for Engineering Applications from 6th to 18th September 2021'
  },
  {
    avatar: AVT5,
    name: 'Deep Learning Workshop',
    review: 'Participated in hands-on Deep Learning Workshop organized by BMSCE IEEE Student Branch in collaboration with Cellstrat'
  },
  {
    avatar: AVT7,
    name: 'RapidMiner Certificate',
    review: 'Successfully passed the examination for Applications & Use Cases Professional Certification'
  },
  {
    avatar: AVT6,
    name: 'Tree Plantation Activity',
    review: 'Participated in Tree Plantation Event organized by Kshiti Foundation Trust held at Bangalore University Campus'
  },
  
]
  

const Achievements = () => {
  return (
    <section id='achievements'>
      <h5>Let me tell you</h5>
      <h2>My Achievements</h2>

      <Swiper pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='container container_achievement'>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="achievement">
                <div className="avatar">
                  <img src={avatar} />
                </div>
                <div className="name">{name}</div>
                <div className="review">{review}</div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Achievements
