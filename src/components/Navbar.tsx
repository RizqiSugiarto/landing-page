import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
    const navigation = [
        "Demos",
        "About",
        "Blog",
        "Pages",
        "Contact",
      ];

    return (
        <div className="w-full">
            <nav className="container mx-auto flex justify-between md:mt-8 mt-4 px-4 md:px-0">
                <div>
                    <Link href={"/"}>
                    <span className="flex">
                        <span>
                            <Image
                                src={"/img/logo.svg"}
                                alt="logo"
                                width={"20"}
                                height={"20"}
                                className="w-8"
                            />
                        </span>
                        <span className="text-xl ml-2 relative top-2 font-bold">Lokotre</span>
                    </span>
                    </Link>
                </div>
                <div className="lg:hidden mt-auto">
                    <Image
                        src={"/img/Menubar.svg"}
                        alt="menubar"
                        width={"25"}
                        height={"17"}
                    />
                </div>
                <div className="hidden gap-14 lg:flex mt-auto">
                    {navigation.map((item, index) => (
                        <Link key={index} href={"/"} className="text-base font-medium">
                            {item}
                        </Link>
                    ))}
                </div>

                {/*Menu*/}
                <div className="hidden">
                    <ul>
                        {navigation.map((item, index) => (
                            <li key={index}>
                                <Link href={"/"}>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}