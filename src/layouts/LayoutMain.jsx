import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useHistory } from "react-router-dom";

const LayoutMain = ({ children }) => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);
    const [keywords, setKeywords] = useState('');

    const handleToggleSidebar = () => setIsOpen(!isOpen);

    const handleChange = (value) => {
        setKeywords(value)
    }

    const handleKeydown = (key) => {
        if (key === 'Enter') {
            if (!keywords) return;
            history.push({
                pathname: '/searched',
                search: `?keywords=${keywords}`
            });
            setKeywords('');
        }
    }

    const handleClickCart = () => {
        history.push({ pathname: '/cart' })
    }

    const handleClickBtnLogin = () => {
        history.push({ pathname: '/login' })
    }

    const handleLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('authToken')
        localStorage.removeItem('cartItems')
        window.location.href = '/'
    }

    const resize = (e) => e.srcElement.innerWidth > 1000 ? setIsOpen(true) : null


    useEffect(() => {
        if (window.innerWidth > 1000) setIsOpen(true)
        window.addEventListener('resize', resize)
    }, [])


    return (
        <div className="w-full min-h-screen flex flex-row">
            {
                isOpen && <Sidebar isOpen={isOpen} />
            }
            <div className="w-full md:w-10/12 lg:w-10/12 xl:w-10/12">
                <Header
                    handleToggleSidebar={handleToggleSidebar}
                    isOpen={isOpen}
                    keywords={keywords}
                    handleChange={handleChange}
                    handleKeydown={handleKeydown}
                    handleClickCart={handleClickCart}
                    handleClickBtnLogin={handleClickBtnLogin}
                    handleLogout={handleLogout}
                />
                {children}
            </div>
        </div>
    )
}

export default LayoutMain
