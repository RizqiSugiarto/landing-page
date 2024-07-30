import React from "react";
import { Container } from "./Container";
import Image from "next/image";

export const GetStartedSection = () => {
  return (
    <Container className="md:mt-48 mt-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 flex flex-col items-center md:items-start max-w-96">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-500 text-center md:text-start">
            Create custom landing pages with Rareblocks that convert more
            visitors than any website. With lots of unique blocks, you can
            easily build a page.
          </p>
          <button className="bg-red-500 text-white text-center font-semibold text-base h-12 rounded-md px-6">
            Try 14 Days Free
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-11">
          <div className="border-2 p-6 rounded-lg text-center bg-white">
            <Image
              src={"/img/cloud.png"}
              alt="Store data on cloud"
              width={"60"}
              height={"60"}
              className="mx-auto"
            />
            <h3 className="font-bold text-lg mt-5">Store data on cloud</h3>
            <p className="text-base text-gray-500 mt-4">
              Create beautiful landing pages with Rareblocks that convert.
            </p>
          </div>
          <div className="border-2 p-6 rounded-lg text-center bg-white">
            <Image
              src={"/img/connect.png"}
              alt="Connect dots smartly"
              width={"60"}
              height={"60"}
              className="mx-auto"
            />
            <h3 className="font-bold text-lg mt-5">Connect dots smartly</h3>
            <p className="text-base text-gray-500 mt-4">
              Create beautiful landing pages with Rareblocks that convert.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
