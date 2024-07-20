import React from 'react';
import blog1 from "/src/assets/blog1.svg";
import blog2 from "/src/assets/blog2.svg";
import blog3 from "/src/assets/blog3.svg";
import arrow from "/src/assets/arrow.svg";

const Blog = () => {
  const blogs = [
    { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image: blog1  },
    { id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image: blog2 },
    { id: 3, title: "Revamping the Membership Model with Triathlon Australia", image: blog3 },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="testinomial">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4">Caring is the new marketing</h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who is joining the community, read about how our community are increasing their membership income and lots more.
        </p>
      </div>
      {/* all blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={blog.image} alt="" width={400} className="hover:scale-95 transition-all duration-300" />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
              <h3 className="mb-3 text-neutralGrey font-semibold">{blog.title}</h3>
              <div className="flex items-center justify-center gap-8">
                <a href="/" className="font-bold hover:text-neutral-700 text-brandPrimary">
                  Read More
                  <img src={arrow} width={50} alt="" className="inline-block ml-2 hover:translate-x-3 transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
