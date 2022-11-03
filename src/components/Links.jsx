import React from "react";
import { AnchorTag } from "./";

const links = () => {
  return (
    <div className="space-y-4">
      <AnchorTag
        link="https://mobile.twitter.com/dami0la"
        linkType="Twitter Link"
        link_id="twitter"
      />
      <AnchorTag
        link="https://training.zuri.team/"
        linkType="Zuri Team"
        link_id="btn__zuri"
      />
      <AnchorTag
        link="http://books.zuri.team/"
        linkType="Zuri Books"
        link_id="books"
        link_title="Handpicked books and customized guides to help you grow and advance your tech careers."
      />
      <AnchorTag
        link="https://books.zuri.team/python-for-beginners?ref_id=mayowa-sunusi"
        linkType="Python Books"
        link_title="Python for beginners"
        link_id="book__python"
      />
      <AnchorTag
        link="https://background.zuri.team/"
        linkType="Background Check for coders"
        link_id="pitch"
        link_title="With the right digital skill set and access to the global freelance marketplace, you can now offer your services online and get paid in dollars from home. Ready?"
      />
      <AnchorTag
        link="https://books.zuri.team/design-rules"
        linkType="Design Books"
        link_id="book__design"
        link_title="The HNG Design Rules Book gives you the tips & guidelines you need to create truly professional designs, by addressing errors that could you get you disqualified."
      />
      <AnchorTag link="/contact" linkType="Contact" link_id="contact" />
    </div>
  );
};

export default links;
