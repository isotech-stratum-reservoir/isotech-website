import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Isotech",
};

export default function NotFound() {
  return (
    <div className="container mt-4 mb-5">
      <h1>Sorry! That page can't be found.</h1>

      <p className="lead">The resource you are looking for can't be found. Please <Link href="/about/contact">contact us</Link> if you need more information.</p>
    </div>
  );
}