import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Track Package",
      slug: "/track",
      active: false,
    },
    {
      name: "Services",
      slug: "/services",
      active: false,
    },
    {
      name: "Pricing",
      slug: "/pricing",
      active: false,
    },
    {
      name: "About Us",
      slug: "/about",
      active: false,
    },
    {
      name: "Login",
      slug: "./login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "./signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },

    {
      name: "Add Post",
      slug: "./add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-black">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                   onClick={() => navigate(item.slug)}>
                    {item.name}
                  </button>
                </li>
              ) : null
            )}

            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}


          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
