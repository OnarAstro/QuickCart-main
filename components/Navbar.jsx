"use client";
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <div className="flex items-center gap-2">
        <Image
          className="cursor-pointer w-9 md:w-11"
          onClick={() => router.push("/")}
          src={assets.logo}
          alt="logo"
        />
        {/* <span className="text-2xl font-bold"></span> */}
      </div>
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden text-lg">
        <Link href="/" className="hover:text-gray-900 transition">
          الرئيسية
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          المنتجات
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          من نحن
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          اتصل بنا
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-s border px-4 py-1.5 rounded-full"
          >
            لوحة البائع
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="السلة"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="طلباتي"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            حسابي
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            لوحة البائع
          </button>
        )}
        {user ? (
          <>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="الرئيسية"
                  labelIcon={<HomeIcon />}
                  onClick={() => router.push("/")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="المنتجات"
                  labelIcon={<BoxIcon />}
                  onClick={() => router.push("/all-products")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="السلة"
                  labelIcon={<CartIcon />}
                  onClick={() => router.push("/cart")}
                />
              </UserButton.MenuItems>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="طلباتي"
                  labelIcon={<BagIcon />}
                  onClick={() => router.push("/my-orders")}
                />
              </UserButton.MenuItems>
            </UserButton>
          </>
        ) : (
          <button
            onClick={openSignIn}
            className="flex items-center gap-2 hover:text-gray-900 transition"
          >
            <Image src={assets.user_icon} alt="user icon" />
            حسابي
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
