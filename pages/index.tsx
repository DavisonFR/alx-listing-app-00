import { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const FILTER_OPTIONS = ["Luxury Villa", "Pool", "Free Parking", "Self Checkin", "Beachfront"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? "" : filter);
  };

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
    activeFilter ? property.category.includes(activeFilter) : true
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <Image 
          src="/hero-image.jpg" 
          alt="Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="flex gap-2 p-4">
        {FILTER_OPTIONS.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full ${
              activeFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </section>

      {/* Listing Section */}
      <section className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProperties.map((property, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <Image src={property.image} alt={property.name} width={300} height={200} className="rounded-md"/>
            <h2 className="text-xl font-bold">{property.name}</h2>
            <p>{property.address.city}, {property.address.country}</p>
            <p>💰 ${property.price}/night</p>
          </div>
        ))}
      </section>
    </div>
  );
}
