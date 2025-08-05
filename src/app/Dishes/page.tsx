// app/dishes/page.tsx

import Image from "next/image";

const dishes = [
  {
    name: "Chicken Biryani",
    image: "/Image/hero-pic.webp",
  },
  {
    name: "Beef Pulao",
    image: "/Image/beefpulao.webp",
  },
  {
    name: "Chicken Karahi",
    image: "/Image/karahi.webp",
  },
  {
    name: "Chicken Korma",
    image: "/Image/korma.jpg",
  },
  {
    name: "Zarda",
    image: "/Image/zarda.jpg",
  },
  {
    name: "Kheer",
    image: "/Image/kheer.jpg",
  },
  {
    name: "Chicken/Beef Shami Kabab",
    image: "/Image/ShamiKabab.jpeg",
  },
  {
    name: "Qeema Samosa",
    image: "/Image/samosa.jpg",
  },
  {
    name: "Spring Rolls",
    image: "/Image/springrolls.jpg",
  },
  {
    name: "Special Ghar Ka Achar",
    image: "/Image/achar.jpg",
  },
];

export default function DishesPage() {
  return (
    <div className="min-h-screen bg-third p-8">
      <h1 className="text-3xl font-bold text-center mb-8 font-serif">Our Dishes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-amber-200 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
    </div>
  );
}
