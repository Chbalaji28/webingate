import React, {useRef, useEffect} from "react";
import { Link, NavLink} from "react-router-dom";
import { Container, Row } from "reactstrap";
import "./header.css";
import logo from '../../assets/images/logo.png';

const nav__links = [
    {
        path:'home',
        display:'Home'
    },
    {
        path:'about',
        display:'About Us'
    },
    {
        path:'expertise ',
        display:'Our Expertise '
    },
    {
        path:'contact',
        display:'Contact Us '
    },
];

const Header = () => {


    const headerRef = useRef(null);

    const menuRef = useRef(null);


    const stickyHaederFunc = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            } else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    };

    useEffect(() => {
        stickyHaederFunc()

        return ()=> window.removeEventListener('scroll', stickyHaederFunc);
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    return (
        <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <Link to='home'>
                        <img src={logo} className="w-100" alt="Logo"/>
                        </Link>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {
                                nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={(navLink) => navLink.isActive ? "nav__active" : ""}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="mobile__menu">
                        <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
                    </div>
                    
                </div>
            </Row>
        </Container>
        </header>
    )
};

export default Header;