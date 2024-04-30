import React, { useState } from "react";
import Modal from "../UI/Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(true)
  };
  return (
    <div>
      <nav>
        <h1>ARC Shop</h1>
        <button onClick={handleModal}>Add To Cart</button>
        {isModalOpen && <Modal />}
      </nav>
    </div>
  );
};

export default Header;
