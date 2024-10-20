import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import img1 from '../../images/image-product-1.jpg';
import img2 from '../../images/image-product-2.jpg';
import img3 from '../../images/image-product-3.jpg';
import img4 from '../../images/image-product-4.jpg';



const Carousel = () => {
  const slides = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="w-full flex justify-center items-center">
      <div className="overflow-hidden relative">
        <div className="flex">
          <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <button onClick={handlePrev}>
            <BiChevronLeft size={40} className="bg-white rounded-full" />
          </button>
          <button onClick={handleNext}>
            <BiChevronRight size={40} className="bg-white rounded-full"/>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Carousel;
