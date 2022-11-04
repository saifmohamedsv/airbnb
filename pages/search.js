import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/infoCard";

const filterationOptions = [
  "Cancellation Flexibility",
  "Type of place",
  "Price",
  "Rooms and Beds",
  "More Filters",
];

const Search = ({ searchResults }) => {
  const router = useRouter();

  const { guests, location, endDate, startDate } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");

  return (
    <div className="h-screen">
      <Head>
        <title>Airbnb - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        placeholder={`${location} | ${formattedStartDate} - ${formattedEndDate} | ${guests} guests`}
      />
      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - from {formattedStartDate} - to {formattedEndDate} - for{" "}
            {guests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div
            className="lg:inline-flex mb-5 space-x-3
           text-gray-800 whitespace-nowrap
            flex items-center"
          >
            {filterationOptions.map((option) => (
              <p
                key={option}
                className="hidden md:block px-4 py-2  border-2 rounded-full transition
                transform duration-100 ease-out hover:shadow-lg
                cursor-pointer active:scale-95 active:bg-gray-100 text-center"
              >
                {option}
              </p>
            ))}
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: { searchResults },
  };
}

export default Search;
