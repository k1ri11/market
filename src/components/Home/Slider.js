import React, {useState} from 'react';
import featuresSectionStyles from './featuresSection.module.scss'; // Укажите правильный путь

const Slider = () => {
    const slides = [
        {id: 1, src: '/assets/slider_item_1.jpg', alt: 'Slide 1'},
        {id: 2, src: '/assets/slider_item_2.jpg', alt: 'Slide 2'},
        {id: 3, src: '/assets/slider_item_1.jpg', alt: 'Slide 3'},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className={featuresSectionStyles.slider}>
            <img
                className={featuresSectionStyles.navButton}
                onClick={handlePrev}
                src={'/assets/left_arrow.svg'}
                alt="left arrow icon"
            />

            <div className={featuresSectionStyles.slideContainer}>
                <img
                    className={featuresSectionStyles.imgBanner}
                    src={slides[currentIndex].src}
                    alt={slides[currentIndex].alt}
                />
                <div className={featuresSectionStyles.dots}>
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={
                                index === currentIndex
                                    ? featuresSectionStyles.activeDot
                                    : featuresSectionStyles.dot
                            }
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <img
                className={featuresSectionStyles.navButton}
                onClick={handleNext}
                src={"/assets/right_arrow.svg"}
                alt="right arrow"
            />
        </div>
    );
};

export default Slider;
