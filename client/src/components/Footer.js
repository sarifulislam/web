import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import footerData from '../data/footer.json';

const Footer = () => {
  const { address, links, services, socialMedia } = footerData;

  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-12 sm:py-20">

          {/* Top area: Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

            {/* 1st block */}
            <div className="col-span-1 sm:col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-blue-900 p-6 sm:p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-3xl sm:text-4xl mb-4">{address.company}</h3>
                <div className="text-md font-medium text-gray-600">
                  <h5>{address.line1}</h5>
                  <p>{address.line2}</p>
                  <p>{address.postalCode}</p>
                  <p>{address.country}</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className="col-span-6 sm:col-span-6 lg:col-span-1 ml-0 sm:ml-7 mx-auto">
              <h6 className="text-[#013289] text-xl sm:text-2xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                {links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <HashLink to={link.url} className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                      {link.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 sm:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-[#013289] text-xl sm:text-2xl font-bold mb-4">OUR SERVICES</h6>
              <ul className="text-md">
                {services.map((service, index) => (
                  <li key={index} className="mb-2">
                    <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-1 sm:col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
              <div className="text-xl mb-6">
                Social Media Links.
              </div>

              <div className="text-md font-medium mb-6">
                {socialMedia.description}
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  {socialMedia.links.map((social, index) => (
                    <li key={index} className={index !== 0 ? "ml-4" : ""}>
                      <Link
                        to={social.url}
                        className="flex justify-center items-center text-blue-900 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                        aria-label={social.ariaLabel}
                      >
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d={social.svgPath} />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-200 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}{"  "}
                <HashLink to="#" className=" hover:text-gray-900">
                  chatwhole.com
                </HashLink>. All rights reserved.
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

