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
      />
      <AnchorTag
        link="https://books.zuri.team/python-for-beginners?ref_id=mayowa-sunusi"
        linkType="Python Books"
        link_id="book__python"
      />
      <AnchorTag
        link="https://background.zuri.team/"
        linkType="Background Check for coders"
        link_id="pitch"
      />
      <AnchorTag
        link="https://books.zuri.team/design-rules"
        linkType="Design Books"
        link_id="book__design"
      />
    </div>
  );
};

export default links;
