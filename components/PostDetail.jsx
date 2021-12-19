import React from "react";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt="devimage"
          className="object-top w-full h-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center w-full h-full mb-8">
          <div className="hidden md:flex items-center justify-center lg:mb-0 lg:mb-0 lg:w-auto mr-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="author"
              className="align-middle rounded-full"
              height={"50px"}
              width={"50px"}
            />
            <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">
              {post.author.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
