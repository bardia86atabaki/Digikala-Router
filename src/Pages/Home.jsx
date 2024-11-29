import React from "react";
import Product from "../Commponent/Product";

function Home() {
  return (
    <div>
       
     <div className="flex gap-3 mt-3">
     <Product/>
     </div>
     <div>
      <img src="src/assets/Digikala.webp" className="h-[500px] mt-3" alt="" />
     </div>

    </div>
  );
}

export default Home;
