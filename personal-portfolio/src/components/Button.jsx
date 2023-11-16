import React from "react";

const Button = ({ styles }) => (
<a href="https://www.linkedin.com/in/tarun-kumar-sharma-7132a122b/" target="_blank" rel="noopener noreferrer">
<button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Connect With Me
  </button>
</a>
);

export default Button;