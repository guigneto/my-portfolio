import Link from 'next/link';

const NavLink = ({ href, title, target }) => {
    return (
        <li>
            <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' target={target}>
                {title}
            </Link>
        </li>
    );
};

export default NavLink;
