import { useState } from "react";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";

const IMAGE_URL = import.meta.env.VITE_SERVER_IMAGE_URL;

const PostCard = ({ post }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="max-w-xs md:max-w-md lg:max-w-lg mx-auto w-full h-auto">
        <div className="bg-white text-slate-800 shadow-lg flex flex-col md:flex-row mx-auto px-6 py-4 rounded-2xl w-full h-auto border border-slate-200 transition">
          
          {/* Image Section */}
          <div className="w-full md:w-1/3 p-2 bg-white rounded-3xl shadow-md border border-slate-200">
            <div className="w-full h-36 overflow-hidden rounded-2xl relative bg-slate-100">
              {!imageLoaded && (
                <div className="absolute inset-0 animate-pulse bg-slate-200 rounded-2xl" />
              )}
              <img
                src={`${IMAGE_URL}/${post.image}`}
                alt="uploaded"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover  duration-500 rounded-2xl cursor-pointer  transform transition ease-in-out hover:scale-105  hover:shadow-lg ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => setPreviewImage(`${IMAGE_URL}/${post.image}`)}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-between w-full md:w-2/3 pl-4">
            <div className="flex w-full justify-between py-2">
              <span className="text-2xl font-semibold">{post.title}</span>
              <span
                className={`text-sm px-3 py-1.5 rounded-xl text-white capitalize ${
                  post.status === "lost"
                    ? "bg-red-500"
                    : "bg-green-500"
                }`}
              >
                {post.status}
              </span>
            </div>

            <div className="flex justify-between w-full py-2 text-sm md:text-base">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <IoWalletOutline />
                  <span>{post.itemName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn />
                  <span>{post.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiUser />
                  <span>{post.postedBy}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 text-right">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.contactInfo}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default PostCard;
