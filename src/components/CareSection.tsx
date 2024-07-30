import { Container } from "./Container"
import Image from "next/image"

export const CareSection = () => {
    return (
    <Container className="flex flex-wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-48 w-full md:mt-48">
            <div className="mt-6 max-w-md md:mt-48">
                <h1 className="font-bold text-4xl text-center md:text-start font-space">We take care of your website</h1>
                <p className="text-base text-gray-500 text-center mt-4 md:text-start">We secure websites by automatically finding and fixing threats. Website security software protects your data website from malicious cyber threats. </p>
            </div>
            <div className="order-first md:order-last mt-16">
                <Image
                    src={"/img/ilustration-2.png"}
                    alt="ilustration-3"
                    width={"496"}
                    height={"468"}
                    className="min-w-64 min-h-56"
                    />
            </div>
        </div>
    </Container>
    )
}