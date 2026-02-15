import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "فخار بي ايادي مصرية - اكتشف تشكيلتنا الرائعة من الفخار اليدوي!",
      offer: "تخفيضات تصل إلى 30% لفترة محدودة",
      buttonText1: "تسوق الآن",
      buttonText2: "اكتشف العروض",
      imgSrc: assets.header_fo,
    },
    {
      id: 2,
      title: "تحف فنية من الفخار المصري - أضف لمسة فنية لمنزلك مع تشكيلتنا الفريدة!",
      offer: "عروض حصرية تصل إلى 25% لفترة محدودة",
      buttonText1: "تسوق الآن",
      buttonText2: "اكتشف العروض",
      round: "rounded-full",
      imgSrc: assets.header_fo2,
    },
    {
      id: 3,
      title: "اعمال يدوية من التراث المصري - اكتشف جمال الحرف اليدوية المصرية الأصيلة!",
      offer: "عروض حصرية تصل إلى 20% لفترة محدودة",
      buttonText1: "تسوق الآن",
      buttonText2: "اكتشف العروض",
      round: "rounded-lg",
      imgSrc: assets.header_fo3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl"
          >
            <div className="md:pl-8 flex-[3] mt-10 md:mt-0">
              <p className="md:text-base text-orange-600 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-orange-600 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image
                    className="group-hover:translate-x-1 transition"
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <div className="relative md:w-72 s:W-55 w-48 max-w-auto md:h-72 h-48 max-h-auto">
                <Image
                  src={slide.imgSrc}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={`h-full w-full object-contain ${slide.round}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-orange-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
