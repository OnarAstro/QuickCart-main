import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-11 md:w-16" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            مرحبًا بك في Astro، وجهتك المثلى للتسوق عبر الإنترنت! نحن ملتزمون
            بتقديم تجربة تسوق استثنائية تجمع بين الجودة والتنوع. اكتشف تشكيلتنا
            الواسعة من المنتجات، بدءًا من الإلكترونيات الحديثة إلى الأزياء
            العصرية، وكل ما بينهما. نحن هنا لتلبية احتياجاتك وتوفير تجربة تسوق
            سهلة وممتعة. انضم إلى مجتمعنا اليوم واستمتع بالتسوق مع Astro!
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">الشركة</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">
                  الرئيسية
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  من نحن
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  اتصل بنا
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">اتصل بنا</h2>
            <div className="text-sm space-y-2">
              <p>201112214304</p>
              <p>Astro@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © ASTRO All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
