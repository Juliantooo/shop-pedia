import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'

const LayoutMain = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSidebar = () => setIsOpen(!isOpen)
    const resize = (e) => e.srcElement.innerWidth > 1000 ? setIsOpen(true) : null
    
    useEffect(() => {
        if(window.innerWidth > 1000) setIsOpen(true)
        console.log(isOpen)
        window.addEventListener('resize', resize)
    }, [])
    
    return (
        <div className="w-full min-h-screen flex flex-row">
            {
                isOpen && <Sidebar isOpen={isOpen}/>
            }
            <div className="w-full md:w-10/12">
                <Header handleToggleSidebar={handleToggleSidebar} isOpen={isOpen}/>
                <Home/>
            </div>
        </div>
    )
}

export default LayoutMain
