import { Container } from "./Container";
import Image from "next/image";

export const Benefit = () => {
  return (
    <Container className="flex flex-wrap justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 md:mt-48 space-y-10 md:space-y-0 md:space-x-6 w-full">
        <section className="md:max-w-[372px] max-w-[312px] mx-auto md:mx-0 text-center md:text-left">
          <Image
            src="/img/icon-3.png"
            alt="Icon representing real-time problem solving"
            width={60}
            height={60}
            className="mx-auto md:mx-0"
          />
          <h2 className="font-bold text-lg mt-5">Solve Problems Real Time</h2>
          <p className="text-base text-gray-500 mt-4">
            Real-time problem solving is not just about time, it&apos;s about time.
            This allows you to solve problems within a specified time problem
            has a solution.
          </p>
        </section>
        <section className="md:max-w-[372px] max-w-[312px] mx-auto text-center md:text-left">
          <Image
            src="/img/icon-1.png"
            alt="Icon representing secured payments"
            width={60}
            height={60}
            className="mx-auto md:mx-0"
          />
          <h2 className="font-bold text-lg mt-5">Secured & Safe Payments</h2>
          <p className="text-base text-gray-500 mt-4">
            By and large, credit cards are easily the most secure and safe
            payment method to use when you shop online. Credit cards are the most
            secure.
          </p>
        </section>
        <section className="md:max-w-[372px] max-w-[312px] mx-auto text-center md:text-left">
          <Image
            src="/img/icon-2.png"
            alt="Icon representing customer support"
            width={60}
            height={60}
            className="mx-auto md:mx-0"
          />
          <h2 className="font-bold text-lg mt-5">24/7 Customer Support</h2>
          <p className="text-base text-gray-500 mt-4">
            The biggest benefit of offering 24/7 support is that you provide a
            more convenient service for your customers, providing round-the-clock support.
          </p>
        </section>
      </div>
    </Container>
  );
};
