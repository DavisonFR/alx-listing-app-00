import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Pill from "@/components/Pill";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function Home() {
  const filters = [
    "Top Villa",
    "Self Checkin",
    "Pet Friendly",
    "Free Parking",
    "Beachfront",
  ];
  const [selected, setSelected] = useState<string | null>(null);

  const filteredProperties = PROPERTYLISTINGSAMPLE.filter((property) =>
    selected ? property.category.includes(selected) : true
  );

  return (
    <>
      <Head>
        <title>StayNest · Find your favorite place</title>
      </Head>

      {/* Hero */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <img
  src="/assets/bg.jpg"
  alt="Background"
  className="object-cover brightness-75 absolute inset-0 w-full h-full z-0"
/>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="flex flex-wrap gap-2 px-4 py-6 justify-center">
        {filters.map((label) => (
          <Pill
            key={label}
            label={label}
            isActive={selected === label}
            onClick={() =>
              setSelected((prev) => (prev === label ? null : label))
            }
          />
        ))}
      </section>

      {/* Listings */}
      <section className="px-4 pb-12">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} data={property} />
          ))}
        </div>
      </section>
    </>
  );
}
