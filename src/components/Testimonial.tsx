import React from "react";
import Image from "next/image";

export const Testimonial = () => {
  return (
    <div className="bg-black md:mt-16">
      <div className="max-w-[552px] pt-10 mx-auto md:pt-20">
        <h1 className="text-white font-bold md:text-5xl text-3xl text-center">
          Trusted by 1200+ world-class businesses
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 md:flex md:flex-row md:justify-center justify-items-center md:mt-16">
        <div className="space-y-5 max-w-[445px] mx-auto md:mr-52">
          <Image
            src="/img/Star.png"
            alt="Star rating"
            width={131}
            height={32}
            className="mx-auto"
          />
          <p className="text-white text-lg text-center">
            &ldquo;I just wanted to share a quick note and let you know that you guys do a really good job. I&apos;m glad I decided to work with you. It&apos;s really great how easy your websites are to update and manage.&rdquo;
          </p>
          <Image
            src="/img/slack-2 1.png"
            alt="Slack logo"
            width={131}
            height={32}
            className="mx-auto"
          />
        </div>
        <div className="mt-10 md:mt-0 space-y-5 max-w-[445px] mx-auto md:mb-36 mb-16">
          <Image
            src="/img/Star.png"
            alt="Star rating"
            width={131}
            height={32}
            className="mx-auto"
          />
          <p className="text-white text-lg text-center">
            &ldquo;I just wanted to share a quick note and let you know that you guys do a really good job. I&apos;m glad I decided to work with you. It&apos;s really great how easy your websites are to update and manage.&rdquo;
          </p>
          <Image
            src="/img/trivago 1.png"
            alt="Trivago logo"
            width={131}
            height={32}
            className="mx-auto mt-5"
          />
        </div>
      </div>
    </div>
  );
};
