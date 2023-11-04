import Link from "next/link";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader"; 
import { IconBrandBinance, IconBrandTelegram, IconBrandWebflow, IconBug, IconChartArcs3, IconChartArrows, IconChartCandle, IconExchange, IconHomeInfinity, IconHomeShield, IconRobot, IconRobotFace, IconToolsKitchen3, IconTrademark, IconWebhook } from "@tabler/icons-react";
import { IconRobotOff } from "@tabler/icons-react";
const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-3">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">DexBots</span>
          </h1> 
          <p className="text-center text-lg">
            {" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              I build genuine Bots to make Passive Income a Reality
            </code>
          </p> 
          <p className="text-center text-lg">
            I also teach people how to develop bots for{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
               Telegram, Dex and Cex
            </code>
            {/* {" "}
            Proceed With{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              caution
            </code> */}
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs  border-t-2 border-blue-400">
               <img src="/telegram.svg" className="h-8 w-8 fill-primary"  color="#009fff"/>
              <p>
                Telegram Games, Sniper and Trading Bots,Token Scanning,Analysis , Notification and Stats Bots{" "}
                <Link href="/debug" passHref className="link">
                  With WebView
                </Link>{" "}
                features.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs  border-b-2 border-blue-500">
            <img src="/trade-1.svg" className="h-8 w-8 fill-primary" color="orange"/>
              <p>
                Token scanners and sniffer dapps with Honeypot checking, MemeCoin websites, clones of websites, Token cloning,{" "}
                <Link href="/mybots" passHref className="link">
                  
                </Link>{" "}
                for multiple chains.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs border-t-2 border-blue-400">
            <img src="/sniper-sight.svg" className="h-8 w-8 fill-primary"  color="cyan"/>
              <p>
                Dex Sniper Bots, Antisweeper Bots, Presale sniper and HST Bots,Auto Trading bots with Take Profit, Stop Loss and Limit Orders{" "}
                <Link href="/mybots" passHref className="link">
                  for Uniswap V2 and V3
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs border-b-2 border-blue-500">
            <img src="/binance-logo.svg" className="h-8 w-8 fill-primary"  color="orange"/>
              <p>
                Exchange Trading Bots, Copy & Auto Trading, Grid Trading, DCA Bots, with TP,SL and Limit Orders, both spot and futures. {" "}
                <Link href="/mybots" passHref className="link">
                  Perpetuals
                </Link>{" "}
                With Tradingview .  
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
