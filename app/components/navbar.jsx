import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-[100vw] mb-16 flex gap-5 justify-between items-center px-16 py-2.5 font-semibold bg-white shadow-2xl max-md:flex-wrap max-md:px-5">
      <div className="flex cursor-pointer self-stretch my-auto text-2xl leading-8 text-green-700">
        SPC | <span>IIITK</span>
      </div>
      <div className="flex gap-12 justify-between self-stretch py-2.5 text-base font-medium leading-6 text-slate-600 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto cursor-pointer">
          <Link href="/" className="text-inherit no-underline">
            <div>Home</div>
          </Link>
        </div>
        <div className="cursor-pointer">For Students</div>
        <div className="flex-auto cursor-pointer">
          <Link href="/recruiter" className="text-inherit no-underline">
            <div>For Recruiters</div>
          </Link>
        </div>
        <div className="cursor-pointer">About IIITK</div>
        <div className="cursor-pointer grow whitespace-nowrap">Contact Us</div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
        }}
        className="cursor-pointer justify-center px-6 py-3.5 text-sm font-semibold leading-4 whitespace-nowrap rounded-md shadow-sm text-neutral-50"
      >
        Login/Register
      </div>
    </div>
  );
}
