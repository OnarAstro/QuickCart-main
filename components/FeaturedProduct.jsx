import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.girl_with_headphone_image,
    title: "قلاده سيناويه بأيادي مصرية",
    description: "اكتشف قلاده سيناويه الفريدة المصنوعة بأيادي مصرية ماهرة، تجمع بين الحرفية التقليدية والتصميم العصري لتضفي لمسة فنية على إطلالتك اليومية.",
  },
  {
    id: 2,
    image: assets.girl_with_earphone_image,
    title: "فخار بي اتراث مصري ",
    description: "أكتشف جمال الفخار المصري الأصيل مع تشكيلتنا الرائعة من الفخار اليدوي، حيث يلتقي التراث بالحرفية لتضفي لمسة فنية فريدة على منزلك.",
  },
  {
    id: 3,
    image: assets.boy_with_laptop_image,
    title: "سجاد سيناوي بأيادي مصرية",
    description: "اكتشف سجاد سيناوي فريد المصنوع بأيادي مصرية ماهرة، يجمع بين الحرفية التقليدية والتصميم العصري لتضفي لمسة فنية على منزلك.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">المنتجات المميزة</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-[0.3] brightness-[0.8] transition duration-300 w-full h-[30rem] max-h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-bold space-y-2 text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-orange-600 px-4 py-2 rounded">
                اشتري الآن <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
