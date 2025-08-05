import React from "react";

type MenuItem = {
  name: string;
  single: number;
  family: number;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className="mb-8 bg-second">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2 text-left">Dish</th>
            <th className="border px-4 py-2 text-left">Single</th>
            <th className="border px-4 py-2 text-left">Family</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">Rs. {item.single}</td>
              <td className="border px-4 py-2">Rs. {item.family}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Food_Menu = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-black bg-slate-500">
      <h1 className="text-3xl font-bold mb-6 text-center">🍽 Food Menu</h1>

      {/* 🍛 Rice Dishes */}
      <MenuSection
        title="🍛 Rice Dishes"
        items={[
          { name: "Chicken Biryani", single: 400, family: 1600 },
          { name: "Beef Pulao", single: 350, family: 1400 },
        ]}
      />

      {/* 🍗 Karahi & Korma */}
      <MenuSection
        title="🍗 Karahi & Korma"
        items={[
          { name: "Chicken Karahi", single: 400, family: 1500 },
          { name: "Chicken Korma", single: 350, family: 1300 },
        ]}
      />

      {/* 🍮 Desserts (Meethay) */}
      <MenuSection
        title="🍮 Desserts (Meethay)"
        items={[
          { name: "Zarda", single: 150, family: 600 },
          { name: "Kheer", single: 180, family: 700 },
        ]}
      />

      {/* 🌶️ Special Items */}
      <div className="mb-8 bg-second">
        <h2 className="text-xl font-semibold mb-2">🌶️ Special Items</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Item</th>
              <th className="border px-4 py-2 text-left">Half Kg</th>
              <th className="border px-4 py-2 text-left">1 Kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Ghar Ka Achar</td>
              <td className="border px-4 py-2">Rs. 350</td>
              <td className="border px-4 py-2">Rs. 700</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ❄️ Frozen Items */}
      <div className="mb-8 bg-second">
        <h2 className="text-xl font-semibold mb-2">❄️ Frozen Items</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Item</th>
              <th className="border px-4 py-2 text-left">Price per Pack</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Chicken Shami Kabab (6 pcs)", 420],
              ["Beef Shami Kabab (6 pcs)", 480],
              ["Chicken Spring Roll (6 pcs)", 300],
              ["Qeema Samosa (6 pcs)", 270],
            ].map(([item, price], i) => (
              <tr key={i}>
                <td className="border px-4 py-2">{item}</td>
                <td className="border px-4 py-2">Rs. {price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contact & Notes */}
      <div className="text-sm text-black font-bold space-y-2">
        <p>🔸 All items are freshly prepared with hygienic ingredients.</p>
        <p>🔸 Custom spice levels available on request.</p>
        <p>🔸 Delivery within Karachi with charges 250/-.</p>
        <p>🔸 Free delivery on orders over Rs. 2000.</p>
        <p>
          📞 <strong>Order Now:</strong> WhatsApp / Call:{" "}
          <a href="tel:+923347753424" className="text-red-700 underline">
            +923347753424
          </a>
        </p>
       
      </div>
    </div>
  );
};

export default Food_Menu;
