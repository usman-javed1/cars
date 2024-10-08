import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showLgDropdown, setShowLgDropdown] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [hoveredDropdownLink, setHoveredDropdownLink] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    // Variable for the common arrow image
    const commonArrowImage = '../../images/arrow.png';

    const scrollToBottomOffset = (offsetFromBottom = 1142) => {
        // const offsetFromBottom = 1142;
        // Calculate the position to scroll to
        const scrollToPosition = document.body.scrollHeight - offsetFromBottom;

        // Scroll to the calculated position smoothly
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    };

    const navLinks = [
        { text: 'Financing', image: commonArrowImage, link: '/financing' },
        { text: 'Special Deals', image: commonArrowImage, link: '/special-deals' },
        { text: 'About us', image: '../../images/navicon.png', hasDropdown: true },
        { text: 'Blog', image: commonArrowImage, link: '/blog' },
        { text: 'FAQ', image: commonArrowImage, link: '/faq' },
        { text: 'Contact', link: '#footer', image: commonArrowImage },
    ];

    const dropdownLinks = [
        { text: 'About us', image: require('../../images/arrow.png'), link: '/about' },
        { text: 'Our Team', image: require('../../images/arrow.png'), link: '/our-team' },
        { text: 'Facebook', image: require('../../images/darkfb.png'), link: '/' },
        { text: 'Youtube', image: require('../../images/darkyoutube.png'), link: '/' },
        { text: 'Telegram', image: require('../../images/darktele.png'), link: '/' },
        { text: 'Instagram', image: require('../../images/darkinsta.png'), link: '/' },
        { text: 'Whatsapp', image: require('../../images/darkwhatsapp.png'), link: '/' },
    ];

    useEffect(() => {
        const disableScroll = () => {
            document.body.style.overflow = 'hidden';
        };
        const enableScroll = () => {
            document.body.style.overflow = '';
        };
        if (showMenu)
            disableScroll()
        else
            enableScroll();
    }, [showMenu])

    return (
        <>
            <nav className='w-[100%] max-w-full lg:h-[80px] h-[70px] items-center lg:justify-between justify-between flex bg-black absolute lg:pr-0 pr-5 lg:px-[60px] px-[25px] ' style={{ position: showMenu ? "fixed top-0" : "relative", zIndex: 99999 }}>

                <div className="logo">
                    <Link to='/'>
                        <img src={require("../../images/logo.png")} alt="logo" width={142} height={42} />
                    </Link>
                </div>
                <div className="h-[56px]  text-white items-center text-[16px] justify-between lg:flex hidden w-[47%]">
                    <ul className='flex w-full justify-between items-center font-[500]' >
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                onMouseEnter={() => {
                                    setHoveredLink(index);
                                    if (link.hasDropdown) setShowLgDropdown(true);
                                }}
                                onMouseLeave={() => {
                                    setHoveredLink(null);
                                    if (link.hasDropdown) setShowLgDropdown(false);
                                }}
                            >
                                {link.text === "Contact" ?

                                    <Link to={link.link} onClick={()=>scrollToBottomOffset()} className='flex justify-center items-center'>
                                        <motion.span
                                            animate={{ color: hoveredLink === index ? '#E3A200' : 'white' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {link.text}
                                        </motion.span>
                                        {link.hasDropdown ? (
                                            <motion.img
                                                src={require("../../images/navicon.png")}
                                                alt=""
                                                className='w-[16px] h-[16px] ml-[3px]'
                                                animate={{
                                                    rotate: hoveredLink === index ? 180 : 0,
                                                    opacity: 1
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        ) : (
                                            <motion.img
                                                src={require("../../images/arrow.png")}
                                                alt=""
                                                className='w-[20px] h-[20px] ml-[3px]'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredLink === index ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link> : <Link to={link.link} className='flex justify-center items-center'>
                                        <motion.span
                                            animate={{ color: hoveredLink === index ? '#E3A200' : 'white' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {link.text}
                                        </motion.span>
                                        {link.hasDropdown ? (
                                            <motion.img
                                                src={require("../../images/navicon.png")}
                                                alt=""
                                                className='w-[16px] h-[16px] ml-[3px]'
                                                animate={{
                                                    rotate: hoveredLink === index ? 180 : 0,
                                                    opacity: 1
                                                }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        ) : (
                                            <motion.img
                                                src={require("../../images/arrow.png")}
                                                alt=""
                                                className='w-[20px] h-[20px] ml-[3px]'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredLink === index ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        )}
                                    </Link>}
                            </li>
                        ))}
                    </ul>

                </div>



                <div className="button pr-[60px] lg:block hidden">
                    <button className='w-[151px] h-[56px] flex justify-center items-center p-[22px, 18px, 18px, 18px] rounded-[10px] bg-white text-black text-[16px] font-[500] transition-all duration-300 hover:bg-[#F6B000] hover:text-white'>
                        Request a Call
                    </button>
                </div>


                <motion.div
                    className="hamburger lg:hidden block cursor-pointer"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <motion.img
                        src={showMenu ? require("../../images/cross.png") : require("../../images/hamburger.png")}
                        className='w-[32px] h-[32px]'
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.div>

                <AnimatePresence>
                    {showMenu && (
                        <motion.div
                            className="menu top-[70px] left-0 fixed bg-black text-white font-[700] text-[16px] h-[calc(100vh-70px)] w-full flex flex-col items-start p-[25px] overflow-y-auto"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{ zIndex: 99999 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className='space-y-5 flex flex-col items-start w-full'>
                                <div>
                                    <Link className='list-none' to={'/financing'} onClick={() => setShowMenu(false)}>
                                        Financing
                                    </Link>
                                </div>
                                <div>
                                    <Link className='list-none' to={'/special-deals'} onClick={() => setShowMenu(false)}>
                                        Special Deals
                                    </Link>
                                </div>
                                <div className='relative w-full'>
                                    <div
                                        className='flex justify-start items-center cursor-pointer'
                                        onClick={() => setShowDropdown(!showDropdown)}
                                    >
                                        About us <span className='ml-[3px]'><img src={require("../../images/navicon.png")} alt="" className='w-[25px] h-[20px] ml-[1.76px] ' /></span>
                                    </div>
                                    <AnimatePresence>
                                        {showDropdown && (
                                            <motion.div
                                                className="dropdown mt-5 pl-[48px] flex flex-col space-y-5"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                                                    <Link to={'/about'} onClick={() => setShowMenu(false)}>About us</Link>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                                    <Link to={'/our-team'} onClick={() => setShowMenu(false)}>Our Team</Link>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                                    <Link to={'/'} className='flex gap-[5px] items-center'> <span><img src={require("../../images/facebook.png")} alt="" className='w-[16px] h-[16px]' /></span> Facebook</Link>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                                    <Link to={'/'} className='flex gap-[5px] items-center'> <span><img src={require("../../images/youtube.png")} alt="" className='w-[16px] h-[16px]' /></span> Youtube</Link>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                                    <Link to={'/'} className='flex gap-[5px] items-center'> <span><img src={require("../../images/twiter.png")} alt="" className='w-[16px] h-[16px]' /></span> Telegram</Link>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                                                    <Link to={'/'} className='flex gap-[5px] items-center'> <span><img src={require("../../images/insta.png")} alt="" className='w-[16px] h-[16px]' /></span> Instagram</Link>
                                                </motion.div>
                                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                                                    <Link to={'/'} className='flex gap-[5px] items-center'> <span><img src={require("../../images/whatsapp.png")} alt="" className='w-[16px] h-[16px]' /></span> Whatsapp</Link>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div>
                                    <Link className='list-none' to={'/blog'} onClick={() => setShowMenu(false)}>
                                        Blog
                                    </Link>
                                </div>
                                <div>
                                    <Link className='list-none' to={'/faq'} onClick={() => setShowMenu(false)}>
                                        FAQ
                                    </Link>
                                </div>
                                <div onClick={() => { scrollToBottomOffset(2100); setShowMenu(false) }}>
                                    <Link className='list-none'  >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full flex justify-center mt-10">
                                <button className='w-[325px] h-[56px] flex justify-center items-center text-black bg-white rounded-[10px] transition-all duration-300 hover:bg-[#F6B000] hover:text-white'>
                                    Request a Call
                                </button>
                            </div>
                            <div className="socialSection w-[184px] h-[24px] flex justify-between items-center mx-auto mt-10">
                                <img src={require("../../images/facebook.png")} alt="" className='w-[20px] h-[20px]' />
                                <img src={require("../../images/youtube.png")} alt="" className='w-[20px] h-[20px]' />
                                <img src={require("../../images/twiter.png")} alt="" className='w-[20px] h-[20px]' />
                                <img src={require("../../images/insta.png")} alt="" className='w-[20px] h-[20px]' />
                                <img src={require("../../images/whatsapp.png")} alt=" " className='w-[20px] h-[20px]' />

                            </div>

                            <div className="detail flex flex-col justify-start items-start">
                                <div className='font-[500] text-[18px] text-[#B9B9B9] mt-10'>
                                    thewheeldeel@gmail.com
                                </div>
                                <div className='font-[500] text-[18px] text-[#B9B9B9] mt-7'>
                                    +1 456 34 678
                                </div>
                                <div className='font-[500] text-[18px] text-[#B9B9B9] mt-7 text-start w-[237px]'>
                                    54 W Church St, Suite 250 Orlando, FL 32801
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            <AnimatePresence>
                {showLgDropdown && (
                    <motion.div
                        className="lg-about-dropdown w-full h-[412px] lg:flex hidden absolute p-[100px] py-[70px] bg-white justify-between"
                        style={{ zIndex: 99999 }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => setShowLgDropdown(true)}
                        onMouseLeave={() => setShowLgDropdown(false)}
                    >
                        <div className="left">
                            <div className="text w-[200px] text-[14px] font-[500] text-[#636363]">
                                Contact us on Social Media
                            </div>
                            <div className="socialLinks mt-10 space-y-5 text-black font-[500] text-[16px]">
                                {dropdownLinks.slice(2).map((link, index) => (
                                    <motion.div
                                        key={index}
                                        onMouseEnter={() => setHoveredDropdownLink(index + 2)}
                                        onMouseLeave={() => setHoveredDropdownLink(null)}
                                    >
                                        <Link to={link.link} className='flex gap-[5px] items-center'>
                                            <div className='flex gap-[5px] items-center'>
                                                <img src={link.image} alt="" className='w-[16px] h-[16px]' />
                                                <motion.span
                                                    animate={{ color: hoveredDropdownLink === index + 2 ? '#E3A200' : 'black' }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {link.text}
                                                </motion.span>
                                            </div>
                                            <motion.img
                                                src={require("../../images/arrow.png")}
                                                alt=""
                                                className='w-[20px] h-[20px] ml-[3px]'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredDropdownLink === index + 2 ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="center">
                            <div className="text w-[108px] text-[14px] font-[500] text-[#636363]">
                                More About us
                            </div>
                            <div className="mt-10 space-y-5 text-black font-[500] text-[16px]">
                                {dropdownLinks.slice(0, 2).map((link, index) => (
                                    <motion.div
                                        key={index}
                                        onMouseEnter={() => setHoveredDropdownLink(index)}
                                        onMouseLeave={() => setHoveredDropdownLink(null)}
                                    >
                                        <Link to={link.link} className='flex gap-[5px] items-center '>
                                            <motion.span
                                                animate={{ color: hoveredDropdownLink === index ? '#E3A200' : 'black' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {link.text}
                                            </motion.span>
                                            <motion.img
                                                src={require("../../images/arrow.png")}
                                                alt=""
                                                className='w-[20px] h-[20px] ml-[3px]'
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredDropdownLink === index ? 1 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="right">
                            <img src={require("../../images/navcarimage.png")} alt="" className='w-[505px] h-[294px] rounded-[15px]' />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
