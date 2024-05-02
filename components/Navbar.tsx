import { cn } from '@/utils/cn';
import { Button } from './ui/button';
import { CircleUser } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/app/auth';
import LoggedInDropdown from './LoggedInDropdown';
import Image from 'next/image';

const Navbar = async () => {
  const session = await auth();
  return (
    <div
      className={cn(
        'flex mx-auto py-4 px-10 left-0 right-0 items-center z-30 justify-between bg-transparent'
      )}
    >
      <div className='flex items-center gap-1'>
        <Image src="/qillalogo.png" alt="logo" width={40} height={40}/>
        <Link
          href="/"
          className="text-4xl text-neutral-300 tracking-wider font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-500"
        >
          Qilla
        </Link>
      </div>
      <Button
        variant="outline"
        size="lg"
        className="bg-black text-lg rounded-full flex items-center gap-2"
        asChild
      >
        {session && (
          <LoggedInDropdown />
        )}
        {/* // ) : (
        //   <Link href="/auth/login">
        //     <CircleUser />
        //     Login
        //   </Link>
        // )} */}
      </Button>
    </div>
  );
};

export default Navbar;
