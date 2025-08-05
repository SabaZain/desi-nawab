

export default function Contact() {
  return (
    <div className="bg-third">

      <div className="max-w-2xl mx-auto text-center px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">📞 Contact Us / Place an Order</h1>

        <p className="text-lg mb-2 font-semibold font-serif">
          Craving delicious home-cooked meals? Ordering is super easy!
        </p>
        <p className="text-lg mb-4 font-serif">
          You can place your order directly on WhatsApp or You can also place your order via phone. Just send us the following details:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-1 text-lg font-serif">
          <li>✅ Your Order (what would you like to eat)</li>
          <li>🏠 Your Full Home Address</li>
          <li>📱 Your Contact Number</li>
        </ul>

        <a
          href="https://wa.me/923347753424"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-700 hover:bg-green-600 text-white text-lg font-semibold py-2 px-4 rounded transition duration-200"
        >
          👉 Click here to order on WhatsApp
        </a>

        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">🕒 Order Timings:</h3>
          <p className="text-lg font-serif"><strong>Taking Orders:</strong> 12:00 PM – 8:00 PM</p>
          <p className="text-lg font-serif"><strong>Delivery:</strong> Same day or next day, depending on availability</p>
        </div>

        <p className="mt-6 italic text-md font-bold text-first font-serif">
          Note: All meals are freshly prepared after receiving your order. We recommend placing your order in advance! 💚
        </p>
      </div>
    </div>
  );
}
