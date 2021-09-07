import Slider from 'react-slick'
import { useRef, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import styles from "../../styles/Home.module.scss";


const settings = {
  infinite: true,
  centerMode: false,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        initialSlide: 0,
        infinite: true,
        autoPlay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}


const AvailableSliderSection = ({locations}) => {
  const sliderRef = useRef()
  
  const handleSlider = (prev) => {
    const slider = sliderRef.current
    if (slider) {
      if (prev) {
        slider.slickPrev()
      } else {
        slider.slickNext()
      }
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      const slickList = document.querySelector(
        '.locations-slider .slick-track'
      )
      slickList.classList.add('divide-x')
      slickList.classList.add('divide-line')
    }
  })

  return (
    <div className={styles.containerFluid}>
      <div className={styles.availableSection}>
        <div className={styles.heading} >
          <div>
            <h2>We are available at</h2>
            <p className={styles.sectionSubTitle}>Let’s go on an adventure</p>
          </div>
          <div className={styles.sliderArrowButtons}>
            <button
              className={styles.arrowBtn}
              onClick={() => handleSlider('prev')}>
              <img src="images/icons/left-arr2.png" />
            </button>
            <button
              className={[styles.arrowBtn, styles.arrowBtnActive].join(' ')}
              onClick={() => handleSlider()}>
              <img src="images/icons/right-arr2.png" />
            </button>
          </div>
        </div>

        <div className={styles.areaCardsContainer}>
          <Slider
            ref={sliderRef}
            {...settings}
            className="locations-slider"
            >
          {locations && locations?.map((location) => (
            <div className={styles.areaCard} key={ location}>
              <div className={styles.cardTopContent}>
                <span className={`${styles.areaBadge} ${styles.areaBadgeDark}`}>
                  {location?.discount}% off
                </span>
                <img src={location?.image} alt={location.title} />
              </div>
              <div className={styles.cardBottomContent}>
                <div>
                  <h3 style={{ marginBottom: 8 }}>{location?.title}</h3>
                  <small className={styles.smallTxt} style={{display: 'flex', flexDirection: 'row'}}>
                    <img
                      src={"images/icons/home.svg"}
                      style={{ marginRight: 6, width: 14 }}
                    />
                    <span>{location?.description}</span>
                  </small>
                </div>
                <a href="#" className={styles.buttonCircle}>
                  <img src="images/icons/arr-ri.svg" style={{width: 14}} />
                </a>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AvailableSliderSection;
