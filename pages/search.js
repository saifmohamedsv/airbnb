import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

const Search = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Airbnb - Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex ">
        <section>
          <p className="text-xs">300+ stays</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Egypt</h1>
          <div className="md:inline-flex">
            <p className="px-4 py-2  border-2 rounded-full transition transform duration-100 ease-out hover:shadow-lg cursor-pointer active:scale-95 active:bg-gray-100">
              Cancellation Flexibility
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
