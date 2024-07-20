import React from 'react';
import company1 from "../assets/company1.png"
import company2 from "../assets/company2.png"
import company3 from "../assets/company3.png"
import company4 from "../assets/company4.png"
import company5 from "../assets/company5.png"
import company6 from "../assets/company6.png"
import company7 from "../assets/company7.png"
import membership from "../assets/membership.png"
import national from "../assets/national.png"
import clubs from "../assets/clubs.png"

const Services = () => {

  const services = [
    {
      id: 1, 
      title: "Membership Organisations",
      description: "Our membership management software provides full automation of membership renewals and payments",
      image: membership
    },
    {
      id: 2, 
      title: "National Associations",
      description: "Our membership management software provides full automation of membership renewals and payments",
      image: national
    },
    {
      id: 3, 
      title: "Clubs And Groups",
      description: "Our membership management software provides full automation of membership renewals and payments",
      image: clubs
    }
  ];

  return (
    <div className='px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
        <p className='text-neutralGrey'>We have been working with some Fortune 500+ clients</p>

        {/* company logos */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <img src={company1} alt="Company 1" />
          <img src={company2} alt="Company 2" />
          <img src={company3} alt="Company 3" />
          <img src={company4} alt="Company 4" />
          <img src={company5} alt="Company 5" />
          <img src={company6} alt="Company 6" />
          <img src={company7} alt="Company 7" />
        </div>
      </div>

      {/* services intro */}
      <div className='mt-20 md:w-1/2 mx-auto text-center'>
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">Manage your entire community in a single system</h2>
        <p className='text-neutralGrey'>Who is Nexcent suitable for?</p>
      </div>

      {/* services cards */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {services.map((service) => (
          <div 
            key={service.id} 
            className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'
          >
            <div>
              <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                <img src={service.image} alt={service.title} className='ml-5'/>
              </div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 py-2'>{service.title}</h4>
              <p className='text-sm text-neutralGrey'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
