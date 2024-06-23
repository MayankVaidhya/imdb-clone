import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 p-3 px-6 bg-slate-600">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">CLone</span>
        </Link>
        <div className="flex gap-4">
          <Link
            href="https://www.netflix.com/in"
            className="p-2 hover:bg-slate-500 rounded-full"
          >
            <RiNetflixFill size={22} className="text-[#E50914]" />
          </Link>
          <Link
            href="https://www.youtube.com"
            className="p-2 hover:bg-slate-500 rounded-full"
          >
            <FaYoutube size={22} className="text-[#FF0000]" />
          </Link>
          <Link
            href="https://www.facebook.com"
            className="p-2 hover:bg-slate-500 rounded-full"
          >
            <FaFacebook size={22} className="text-[#1877F2]" />
          </Link>
          <Link
            href="https://www.twitter.com"
            className="p-2 hover:bg-slate-500 rounded-full"
          >
            <FaTwitter size={22} className="text-[#1DA1F2]" />
          </Link>
        </div>
      </div>
      <hr className="bg-slate-600" />
      <div className="text-center md:text-sm">
        <p>Copyright © 2024 | All rights reserved</p>
      </div>
    </div>
  );
}
