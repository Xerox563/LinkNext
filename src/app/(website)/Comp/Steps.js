import React from "react";

const Steps = () => {
  return (
    <div className="bg-red-700 pt-32 pb-28 px-14">
      <div className="container mx-auto  p-4 bg-red-700 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-900 rounded-lg shadow-lg p-6  hover:bg-blue-400">
            <h2 className="text-2xl font-bold text-white mb-4">🚀 Quick Sign-Up</h2>
            <p className="text-gray-400 text-lg">
              Get started in seconds with a simple and easy sign-up process!
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-purple-900 rounded-lg shadow-lg p-6  hover:bg-blue-400">
            <h2 className="text-2xl font-bold text-white mb-4">
              🎨 Personalize Your Profile
            </h2>
            <p className="text-gray-400 text-lg">
              Customize your profile with a unique style and standout design.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-purple-900 rounded-lg shadow-lg p-6  hover:bg-blue-400">
            <h2 className="text-2xl font-bold text-white mb-4">
              🔗 Add & Arrange Links
            </h2>
            <p className="text-gray-400 text-lg">
              Effortlessly add your links and organize them for maximum impact!
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
