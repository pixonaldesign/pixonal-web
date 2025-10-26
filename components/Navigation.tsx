import Link from 'next/link';
import MobileMenu from './MobileMenu';
import NavLink from './NavLink';

export default function Navigation() {
  return (
    <div className="w-full mx-auto rounded-[20px] flex justify-center items-start gap-2.5">
      <div className="w-full pl-3 md:pl-5 pr-2 md:pr-3.5 bg-zinc-800/20 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-white/10 backdrop-blur-lg flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center pl-1">
          <Link href="/" className="cursor-pointer">
            <img 
              src="/images/logo.svg" 
              alt="Pixonal Logo" 
              className="h-[18px] w-[79.614px]"
            />
          </Link>
        </div>

            {/* Navigation Links */}
            <div className="hidden md:flex self-stretch justify-start items-center">
              <div className="self-stretch flex justify-start items-center">
            {/* Llumen */}
            <NavLink 
              href="/llumen" 
              className="w-36 self-stretch border-l border-white/10 flex justify-center items-center gap-2.5"
            >
              <div className="size- inline-flex flex-col justify-center items-center gap-0.5">
                <div className="text-center justify-start text-white text-base font-normal font-untitled-sans capitalize leading-5">
                  Llumen®
                </div>
                <div className="w-16 h-0 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-white/0"></div>
              </div>
            </NavLink>

            {/* Industries */}
            <NavLink 
              href="/industries" 
              className="w-36 self-stretch border-l border-white/10 flex justify-center items-center gap-2.5"
            >
              <div className="size- inline-flex flex-col justify-center items-center gap-0.5">
                <div className="text-center justify-start text-white text-base font-normal font-untitled-sans capitalize leading-5">
                  Industries
                </div>
                <div className="w-16 h-0 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-white/0"></div>
              </div>
            </NavLink>

            {/* Advisory */}
            <NavLink 
              href="/advisory" 
              className="w-36 self-stretch border-l border-white/10 flex justify-center items-center gap-2.5"
            >
              <div className="size- inline-flex flex-col justify-center items-center gap-0.5">
                <div className="text-center justify-start text-white text-base font-normal font-untitled-sans capitalize leading-5">
                  Advisory
                </div>
                <div className="w-16 h-0 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-white/0"></div>
              </div>
            </NavLink>

            {/* Newsroom */}
            <NavLink 
              href="/newsroom" 
              className="w-36 self-stretch border-l border-r border-white/10 flex justify-center items-center gap-2.5"
            >
              <div className="size- inline-flex flex-col justify-center items-center gap-0.5">
                <div className="text-center justify-start text-white text-base font-normal font-untitled-sans capitalize leading-5">
                  Newsroom
                </div>
                <div className="w-16 h-0 origin-top-left rotate-180 outline outline-1 outline-offset-[-0.50px] outline-white/0"></div>
              </div>
            </NavLink>
          </div>

          {/* Get In Touch Button and Mobile Menu */}
          <div className="h-16 flex justify-center items-center gap-3">
            <div className="w-36 self-stretch border-r border-white/10 md:border-r-0 flex items-center justify-center p-3 pr-0">
              <NavLink 
                href="/contact"
                className="p-3 opacity-95 bg-white rounded-[10px] inline-flex justify-center items-center self-stretch"
              >
                <div className="text-center justify-center text-black text-base font-normal font-untitled-sans capitalize leading-5">
                  Get In Touch
                </div>
              </NavLink>
            </div>
            <div className="md:hidden size- p-2.5 opacity-95 rounded-[10px] flex justify-center items-center gap-2.5">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}