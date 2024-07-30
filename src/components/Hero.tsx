import Image from "next/image";
import { Container } from "./Container";

export const Hero = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="md:mt-36 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-last mt-10 md:order-first md:mt-0">
            <Image
              src={"/img/Illustration.png"}
              alt="ilustration"
              width={"600"}
              height={"541"}
            />
          </div>
          <div className="space-y-4">
            <h1 className="font-bold text-4xl md:text-7xl text-gray-900">
              Protect all your data with strong security access
            </h1>
            <h2 className="font-medium text-red-500 text-xl">
              Ensuring maximum security
            </h2>
            <p className="text-xl text-gray-400">
              This is software that protects all your data, including strong
              security access. Use data as needed and provide security.
            </p>
            <button className="w-[272px] h-[62px]  text-white text-base font-semibold rounded-sm bg-red-500 text-center">
              Scan your website free
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
