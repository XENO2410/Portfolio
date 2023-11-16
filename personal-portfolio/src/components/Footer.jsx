import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-4 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-4">
        <img
          src={logo}
          alt="hoobank"
          className="w-[200px] h-[54.28px] object-contain"
        />
        {/* <p className={`${styles.paragraph} mt-2 max-w-[312px] text-sm`}>
          Wish I Knew
        </p> */}
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-2 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[16px] leading-[20px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[18px] text-dimWhite hover:text-white cursor-pointer  ${
                    index !== footerlink.links.length - 1 ? "mb-2" : "mb-0"
                  }`}
                >
                 <a href={`#${link.name}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[18px] text-white">
        Copyright Ⓒ 2023 XENO. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-4">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[18px] h-[18px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
