import { Container } from "./Container";
import Image from "next/image";

export const SecureSections = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:mt-6  md:flex md:justify-between">
        <div className="mt-6 max-w-md md:mt-48">
          <h1 className="font-bold text-4xl text-center md:text-start">
            Data exchange is the most secure
          </h1>
          <p className="text-base text-gray-500 text-center mt-4 md:text-start">
            Data security refers to the process of protecting all data from
            unauthorized access and data corruption throughout its lifecycle.{" "}
          </p>
        </div>
        <div className="order-first mt-16">
          <Image
            src={"/img/ilustration-3.png"}
            alt="ilustration-3"
            width={"496"}
            height={"468"}
            className="min-w-64 min-h-56"
          />
        </div>
      </div>
    </Container>
  );
};
