import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h6>MARVEL Comics Store</h6>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}
