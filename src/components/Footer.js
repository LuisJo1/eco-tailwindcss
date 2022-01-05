import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full pt-1 mb-1 bg-white border-b-2 border-blue-700">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col items-center mt-16 border-t-2 border-gray-300">
          <div className="py-6 text-center sm:w-2/3">
            <p className="mb-2 text-sm font-bold text-blue-700">
              © 2022 by Comics Inc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
