import Image from 'next/image';

export default function SpecialItemPage() {
  return (
    <main className="min-h-screen bg-third py-10 px-5 md:px-20">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold font-serif text-gray-800 mb-6">
          🌶️ Special Homemade Achar
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/Image/achar.jpg" 
              alt="Homemade Achar"
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl font-semibold text-red-700 mb-4">
              Taste of Tradition
            </h2>
            <p className="text-green-950 font-semibold text-lg leading-relaxed">
              Our homemade achar is made with handpicked ingredients and a
              traditional family recipe. Bursting with flavor, its the perfect
              side to elevate any meal. No preservatives, just real taste just
              like its made at home.
            </p>
            <p className="mt-4 text-sm text-gray-800 italic">
              Freshly packed | 100% Homemade | Limited Stock
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
