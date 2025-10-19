import React from "react";
import { motion } from "framer-motion";

const Products = () => {
  const items = [
    {
      title: "Smart Watch",
      price: "$129",
      image:
        "https://cdn.pixabay.com/photo/2023/10/07/14/24/smartwatch-8300238_1280.jpg",
    },
    {
      title: "Wireless Headphones",
      price: "$99",
      image:
        "https://cdn.pixabay.com/photo/2017/08/06/02/49/headphones-2588056_1280.jpg",
    },
    {
      title: "Laptop Bag",
      price: "$89",
      image:
        "https://hookaba.com/cdn/shop/files/Eye_Rover_Gif_1.gif?v=1749535184",
    },
    {
      title: "Gaming Keyboard",
      price: "$89",
      image:
        "https://cdn.pixabay.com/photo/2023/08/29/22/28/keyboard-8222233_1280.jpg",
    },
    {
      title: "Mechanical Mouse",
      price: "$49",
      image:
        "https://cdn.pixabay.com/photo/2021/07/09/09/46/mouse-6398757_640.jpg",
    },
    {
      title: "Bluetooth Speaker",
      price: "$79",
      image:
        "https://cdn.pixabay.com/photo/2021/07/27/15/16/speaker-6497177_640.jpg",
    },
    {
      title: "DSLR Camera",
      price: "$499",
      image:
        "https://cdn.pixabay.com/photo/2023/03/31/06/45/camera-7889301_640.jpg",
    },
    {
      title: "Office Chair",
      price: "$149",
      image:
        "https://cdn.pixabay.com/photo/2021/09/26/11/44/chair-6657315_960_720.jpg",
    },
    {
      title: "Tablet",
      price: "$299",
      image:
        "https://cdn.pixabay.com/photo/2016/06/03/12/37/internet-search-engine-1433323_640.jpg",
    },
    {
      title: "Smart Glasses",
      price: "$199",
      image:
        "https://www.bosshunting.com.au/wp-content/uploads/2024/11/Apple-Reportedly-Pursuing-Smart-Glasses-Following-Vision-Pro-Flop-1440x1440.jpg",
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-screen bg-[#0f1112] text-white flex flex-col items-center justify-center py-16 px-6 sm:px-10 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-[28px] sm:text-[36px] md:text-[42px] font-bold mb-10 text-center"
      >
        Our <span className="text-blue-500 italic">Products</span>
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1200px]">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="bg-[#1a1c1f] rounded-[15px] overflow-hidden shadow-lg shadow-gray-900/40 
                       hover:scale-105 hover:shadow-blue-800/40 transition-transform duration-300 cursor-pointer"
          >
            <div className="w-full h-[250px] sm:h-[280px] md:h-[300px] overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-[18px] sm:text-[20px] font-semibold">
                {item.title}
              </h3>
              <p className="text-blue-400 text-[16px]">{item.price}</p>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#2563eb",
                  color: "#fff",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-[8px] transition-all duration-200"
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
