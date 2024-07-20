import React from 'react';

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-14">
          <div>
            <img src="src/assets/pana.svg" alt="" height={500} width={500} />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">How to design your site footer like we did</h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src="src/assets/tesla.svg" alt="" width={400} />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith</h5>
              <p className="text-base text-neutralDGrey mb-8">British Dragon Boat Racing Association</p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img src="src/assets/company1.png" alt="" className="cursor-pointer" />
                  <img src="src/assets/company2.png" alt="" className="cursor-pointer" />
                  <img src="src/assets/company3.png" alt="" className="cursor-pointer" />
                  <img src="src/assets/company4.png" alt="" className="cursor-pointer" />
                  <img src="src/assets/company5.png" alt="" className="cursor-pointer" />
                  <img src="src/assets/company6.png" alt="" className="cursor-pointer" />
                  <img src="src/assets/company7.png" alt="" className="cursor-pointer" />
                  <div className="flex items-center gap-8">
                    <a href="/" className="font-bold hover:text-neutral-700 text-brandPrimary">Meet all Customers <img src="src/assets/arrow.svg" width={50} alt="" className="inline-block mt-5 hover:translate-x-3 transition duration-300" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;
