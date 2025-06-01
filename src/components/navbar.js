import Link from 'next/link'

export default function NavBar() {
  return (
    <>
        <nav className="pt-20 pb-5 px-75 ">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl text-black font-bold">
                Himanshu Saini
            </Link>
            <div className="space-x-4 ">
                <Link href="/projects " className="text-gray-600 hover:text-black">
                projects
                </Link>
                <Link href="/writing"  className="text-gray-600 hover:text-black">
                writing
                </Link>
                <Link href="/resume" className="text-gray-600 hover:text-black">
                resume
                </Link>
            </div>
            </div>
        </nav>
    </>
  );
}