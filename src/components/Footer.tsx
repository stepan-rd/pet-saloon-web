import React, { useCallback } from "react";

type Props = {};

export function Footer({}: Props) {
  const handleInstagramLogoClick = useCallback(() => {
    window.open("https://www.instagram.com", "_blank");
  }, []);

  const handleTwitterLogoClick = useCallback(() => {
    window.open("https://x.com", "_blank");
  }, []);

  return (
    <div className="h-[250px] justify-center gap-[10%] bg-stone-900 items-center w-full px-[20%] flex mt-[100px]">
      <div>
        <h1 className="text-3xl font-bold text-stone-200">PetSln</h1>
        <div className="flex justify-center gap-2 mt-2">
          <img
            className="cursor-pointer"
            onClick={handleInstagramLogoClick}
            width={21}
            height={24}
            src="/instagramIcon.svg"
            alt="instagramIcon"
          />
          <img
            className="cursor-pointer"
            onClick={handleTwitterLogoClick}
            width={22}
            height={22}
            src="/twitterIcon.svg"
            alt="twitterIcon"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-fit">
        <h1 className="mb-2 text-lg font-bold text-stone-200">Get in touch</h1>
        <p className="flex flex-col items-center gap-2 text-stone-300">
          <span>contactpetsln@petsaloon.com</span>
          <span>+123 123 123 123</span>
          <span> Miami, London street 54</span>
        </p>
      </div>
    </div>
  );
}
