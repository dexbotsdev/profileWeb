import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import WebsitesCard from "~~/components/WebsitesCard";
import { folio } from "~~/data";
const MyBots: NextPage = () => {
    return (
        <>
            <MetaHeader />
            <div className="flex items-center flex-col flex-grow pt-5">
                <div className="px-5 items-center flex-col">
                    <img src="/portfolio.png" width={'256px'} alt="" />
                    <h1 className="text-center">

                        <span className="block text-2xl">My Portfolio</span>
                        {/* <span className="block text-4xl font-bold">DexBotDev</span> */}
                    </h1>
                </div>

                <div className="flex-grow bg-base-300 w-full mt-8 px-8 py-12">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                        {folio && folio.map((item,index) => (
                            <WebsitesCard item={item} />  

                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyBots;
