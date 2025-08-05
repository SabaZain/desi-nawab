import Image from "next/image";
import { Button } from '../components/ui/button';
import Link from 'next/link';

const dishes = [
  
  {
    name: "Chicken Karahi",
    image: "/Image/karahi.webp",
  },
  
  {
    name: "Zarda",
    image: "/Image/zarda.jpg",
  },
  
  {
    name: "Chicken/Beef Shami Kabab",
    image: "/Image/ShamiKabab.jpeg",
  },
   
];

export default function Menupic() {
  return (
    <div className="min-h-screen bg-third p-8">
      <h1 className="text-3xl font-bold text-center mb-4 font-serif">Our Dishes</h1>
      <p className="text-[16px] text-center font-normal font-serif p-2">🍽️ At Desi Nawab, we bring the warmth of homemade food straight to your doorstep. 
        Our dishes are freshly prepared daily with love, care, and authentic ingredients 
        just like home. From traditional comfort meals to flavorful snacks, every bite is a taste 
        of home-cooked goodness.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-amber-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow ease-in-out duration-300"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              width={400}
              height={300}
              className="object-cover w-full h-60 transition ease-in-out duration-300 transform hover:scale-105"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {dish.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div>
         <Button variant="default" className='text-xl text-center mt-11 ml-20 sm:ml-auto md:ml-52 lg:ml-auto p-4 bg-pink-700'><Link href="Dishes">See More Dishes...</Link></Button>
      </div>
    </div>
  );
}
