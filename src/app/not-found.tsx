import Link from "next/link";
import {Button} from '../components/Button'

export default function NotFound() {
  return (
    <div className="container relative  mt-16 text-center px-4">
      <h1 className="text-6xl md:text-[168px] mb-4 md:leading-none font-bold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center ">404</h1>
      <h2 className="text-2xl md:text-[28px] mb-4  font-semibold tracking-tight bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}