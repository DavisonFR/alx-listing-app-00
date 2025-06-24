import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const PropertyCard: React.FC<{ data: PropertyProps }> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden w-full sm:w-[300px]">
      <div className="relative h-56 w-full">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
        />
        {data.discount && (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
            {data.discount}% off
          </span>
        )}
      </div>
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <p className="text-sm text-gray-500">
          {data.address.city}, {data.address.country}
        </p>
        <p className="font-bold">${data.price.toLocaleString()}</p>
        <p className="text-yellow-500 text-sm">★ {data.rating}</p>

        <div className="flex flex-wrap gap-1 mt-2">
          {data.category.map((tag, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
