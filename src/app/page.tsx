'use client';
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
// import Products from "./Components/Products"; DONT OPEN
import Range from "./Components/Range";
import RoomSlider from "./Components/RoomSlider";

import { Product } from '../../types/product' 
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { allProducts } from '@/sanity/lib/queries'
import { urlFor } from "@/sanity/lib/image";


export default function Home() {
  return (
   <div className=" " >
    <Navbar/>
    <HeroSection/>
    <Range/>
    
    <RoomSlider/>
    <Gallery/>
    <Footer/>
   </div>
  );
}



// const Products = () => {

//   const [product , setProduct] = useState<Product[]>([])

//   useEffect(() => {
//     async function fetchproduct() {
//       const fetchedProduct : Product[] = await client.fetch(allProducts)
//       setProduct(fetchedProduct)
//     }
//     fetchproduct()
//   },[])



// return (
//   <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-16">
//     <h1 className="text-2xl font-bold mb-6 text-center">
//       Our Latest Product
//     </h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//     </div>
//     {product.map((product) => (
//       <div key= {product._id}>
//         {product.title}
//         {product.image && (
//           <image src={urlFor(product.image).url()}
//           alt="image"
//           width={200}
//           height={200}
//           className="w-full h-48 object-cover rounded-md"
//           />
//         )}
//          <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
//             <p className="text-gray-500 mt-2">
//               {product.price ? `$${product.price}` : "Price not available"}
//             </p>

//       </div>
//     ))}
    
//   </div>
// )

// }
    




{/* <Products/> DONT OPEN */}