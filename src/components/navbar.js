import Link from 'next/link'

export default function NavBar() {
  return (
    <>
        <nav className="pt-40 pb-1 px-100 ">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl text-black font-bold">
                Himanshu Saini
            </Link>
            <div className="space-x-4 ">
                <Link href="/resume" className="text-gray-600 hover:text-black">
                resume
                </Link>
            </div>
            </div>
        </nav>
    </>
  );
}