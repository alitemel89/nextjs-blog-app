import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div>
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          className="align-middle rounded-full"
          height={"100px"}
          width={"100px"}
        />
      </div>
      <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  );
};

export default Author;
