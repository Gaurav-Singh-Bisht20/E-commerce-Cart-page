import { useState } from "react";
import img1 from '../../images/image-product-1.jpg';
import img2 from '../../images/image-product-2.jpg';
import img3 from '../../images/image-product-3.jpg';
import img4 from '../../images/image-product-4.jpg';

const Carousel2 = () => {
    const slides = [img1, img2, img3, img4];
    const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-[80%] max-h-[440px] rounded-md overflow-hidden">
            <img src={slides[currentImg]} alt="" />
        </div>
        <div className="flex gap-x-4 w-[80%] justify-center items-center h-[20%] rounded-md overflow-hidden">
            {
                slides.map((item, index) => (
                    <div key={index}><img src={item} alt="" className={`cursor-pointer rounded-md`} onClick={()=> setCurrentImg(index)}/></div>
                ))
            }
        </div>
    </div>
  )
}

export default Carousel2