import React from "react";

export default function CleanPersonalCard() {
  const imageUrl =
    "https://pbs.twimg.com/profile_images/1672977127380258816/B_VgKKYo_400x400.jpg"; // Replace with your image URL
  const name = "Shivesh Kumar Jha";
  const occupation = "Student";
  const location = "Darbhanga";
  const email = "shiveshf2@gmail.com";

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 transform hover:scale-105">
      <a href="/">
        <img className="p-8 rounded-t-lg" src={imageUrl} alt={name} />
      </a>
      <div className="px-6 pb-6">
        <a href="/">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {name}
          </h2>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {occupation} | {location}
        </p>
        <p className="text-gray-700 dark:text-gray-300">Email: {email}</p>
      </div>
    </div>
  );
}
