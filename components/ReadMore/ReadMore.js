import { React, useState } from "react";

export default function ReadMore({ children, maxLength }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="p__default">
        {isReadMore ? text.slice(0, maxLength) : text}
        {isReadMore ? "..." : ""}
      </p>
      <span
        onClick={toggleReadMore}
        className="rounded-md bg-white p-1.5 text-center uppercase dark:bg-gray-700"
      >
        {isReadMore ? " read more" : " show less"}
      </span>
    </>
  );
}
