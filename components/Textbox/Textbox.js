import React from "react";
import InfoIcon from "../Icons/InfoIcon";

export default function Textbox({ title, text, type }) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-md bg-lightSecondaryGray p-8 dark:bg-primaryBg">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-4">
          <InfoIcon />
          <h4 className="heading__default_2 text-2xl font-semibold">{title}</h4>
        </div>
        <p className="p__default">{text}</p>
      </div>
    </div>
  );
}
