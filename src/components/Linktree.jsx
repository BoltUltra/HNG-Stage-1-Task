import React from "react";
import { Footer, Links } from "./";

const Linktree = () => {
  return (
    <div className="w-full">
      <div className="space-y-3 mb-5">
        <img
          id="profile__img"
          src="/user-img.jpg"
          alt="user-img"
          className="rounded-full mx-auto w-32"
        />
        <p className="text-center font-bold text-xl" id="twitter">
          Mayowa.js
        </p>
        <p className="text-center font-bold text-xl hidden" id="slack">
          Mayowa Sunusi
        </p>
      </div>
      <Links />
      <Footer />
    </div>
  );
};

export default Linktree;
