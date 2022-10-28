import React from "react";

const anchorTag = ({ link, linkType, link_id, link_title }) => {
  return (
    <div className="w-full bg-[#F4F5F7] py-4 flex justify-center rounded-lg md:text-base text-sm">
      <a href={link} className="text-center" id={link_id} title={link_title}>
        {linkType}
      </a>
    </div>
  );
};

export default anchorTag;
