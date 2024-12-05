
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect } from "react";
import TopBarRight from "./TopBarRight";

function TopBar() {

    useEffect(() => {
        const scrollNav = document.querySelector('.topNavScroll');
        const scrollNavToggle = document.querySelector('.ScrollNav');
  
        if (!scrollNav || !scrollNavToggle) return;

        const observer = new IntersectionObserver((entries) => {
            const isIntersecting = entries[0].isIntersecting;

            if (isIntersecting) {
                scrollNavToggle.classList.add('hidden'); 
            } else {
                scrollNavToggle.classList.remove('hidden'); 
            }
        });

        observer.observe(scrollNav);

        return () => {
            observer.disconnect(); 
        };
    }, []);
    return (
        <div className="container flex flex-col items-center justify-between px-4 pt-3 mx-auto topNavScroll sm:flex-row">
            <div className="flex space-x-4 mb-2 sm:mb-0 max-[640px]:hidden">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <span>EN</span>
                    <IoMdArrowDropdown />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <span>USD</span>
                    <IoMdArrowDropdown />
                </div>
            </div>
            <TopBarRight />
        </div>
    )
}

export default TopBar