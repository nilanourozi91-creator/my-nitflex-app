import React from "react";

interface Data {
  label: string;
}

const NavbarItem: React.FC<Data> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-200 transition">
      {label}
    </div>
  );
};

export default NavbarItem;