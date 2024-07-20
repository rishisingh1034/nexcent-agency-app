import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <div className="flex items-center justify-center lg:w-2/5 mx-auto">
          <div className="text-center">
            <h2 className="lg:text-5xl text-3xl text-neutralDGrey font-semibold mb-6 lg:leading-snug">
              Pellentesque suscipit fringilla libero eu.
            </h2>
            <div>
              <button className="btn-primary">Get a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
