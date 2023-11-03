import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
const MyBots: NextPage = () => {
    return (
        <>
            <MetaHeader />
            <div className="flex items-center flex-col flex-grow pt-3">
                <div className="px-5">
                    <h1 className="text-center">
                        <span className="block text-xl">Few of the Bots I Developed for Customers</span>
                        {/* <span className="block text-4xl font-bold">DexBotDev</span> */}
                    </h1>
                </div>

                <div className="flex-grow bg-base-300 w-full mt-8 px-8 py-12">
                    <div className="flex justify-center items-center gap-12 flex-col sm:flex-row mt-4">
                        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                            <BugAntIcon className="h-8 w-8 fill-secondary" />
                            <p>
                                Tinker with your smart contract using the{" "}
                                <Link href="/debug" passHref className="link">
                                    Debug Contract
                                </Link>{" "}
                                tab.
                            </p>
                        </div>
                        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                            <p>
                                Explore your local transactions with the{" "}
                                <Link href="/blockexplorer" passHref className="link">
                                    Block Explorer
                                </Link>{" "}
                                tab.
                            </p>
                        </div>
                        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                            <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                            <p>
                                Explore your local transactions with the{" "}
                                <Link href="/blockexplorer" passHref className="link">
                                    Block Explorer
                                </Link>{" "}
                                tab.
                            </p>
                        </div>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-1md">

                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2><MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-sm">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyBots;
