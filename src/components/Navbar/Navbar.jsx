import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMenuAltRight, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import logo from "./../../assets/favicon.png";
import CV from "./../../assets/web developer.pdf";

const Navbar = () => {
	const [activeNav, setActiveNav] = useState("*");
	const [open, setOpen] = useState(false);
	// const [show, setShow] = useState("translate-y-0");
	// const [lastScrollY, setLastScrollY] = useState(0);

	// const navController = () => {
	// 	if (window.scrollY > 200) {
	// 		if (window.scrollY > lastScrollY) {
	// 			setShow("-translate-y-[80px]");
	// 		} else {
	// 			setShow("shadow-sm");
	// 		}
	// 	} else {
	// 		setShow("translate-y-0");
	// 	}

	// 	setLastScrollY(window.scrollY);
	// 	console.log(lastScrollY);
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", navController);

	// 	return () => {
	// 		window.removeEventListener("scroll", navController);
	// 	};
	// }, [lastScrollY]);

	return (
		<nav>
			<div className='container flex items-center justify-between'>
				<div className='nav_icon'>
					<img src={logo} alt='' />
					{open ? (
						<CgClose onClick={() => setOpen(!open)} className='menu_icon' />
					) : (
						<BiMenuAltRight
							onClick={() => setOpen(!open)}
							className='menu_icon'
						/>
					)}
				</div>
				<div className={`nav_menu ${open && "active"}`}>
					<a
						href='/'
						onClick={() => setActiveNav("/")}
						className={activeNav === "/" ? "active" : ""}
					>
						<AiOutlineHome />
						<span>Home</span>
					</a>
					<a
						href='#about'
						onClick={() => setActiveNav("about")}
						className={activeNav === "about" ? "active" : ""}
					>
						<AiOutlineUser />
						<span>About</span>
					</a>
					<a
						href='#experiences'
						onClick={() => setActiveNav("experiences")}
						className={activeNav === "experiences" ? "active" : ""}
					>
						<BiBook />
						<span>Experience</span>
					</a>
					<a
						href='#portfolio'
						onClick={() => setActiveNav("services")}
						className={activeNav === "services" ? "active" : ""}
					>
						<RiServiceLine />
						<span>Portfolio</span>
					</a>
					<a
						href='#contact'
						onClick={() => setActiveNav("contact")}
						className={activeNav === "contact" ? "active" : ""}
					>
						<BiMessageSquareDetail />
						<span>Contact</span>
					</a>

					<a href={CV} download className='btn'>
						Download CV
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
