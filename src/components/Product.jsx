const Product = () => (
  <div className="px-6 pb-6">
    <div>
      <typography className="py-2 text-4xl font-semibold">
        Infinix INBOOK
      </typography>
      <hr className="border-2 border-black" />
    </div>
    <div className="mt-6 flex gap-4">
      <div className="w-2/5">
        <img
          alt="Product"
          className="h-64 w-10/12"
          src="https://ik.imagekit.io/d9mvewbju/SmileCart/thumbnail_61_7PaLfb.jpg"
        />
      </div>
      <div className="w-3/5 space-y-4">
        <typography>
          Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.
        </typography>
        <typography>MRP: $395.97</typography>
        <typography className="font-semibold">Offer price: $374.43</typography>
        <typography className="font-semibold text-green-600">6% off</typography>
      </div>
    </div>
  </div>
);

export default Product;
