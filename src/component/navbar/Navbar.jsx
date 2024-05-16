import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
    return (
        <div>
            <div>Logo</div>
            <div>
                {/* add link here, use <Link /> instead of a */}
                <Links />
            </div>
        </div>
    );
}

export default Navbar;