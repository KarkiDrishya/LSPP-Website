import leapfrogLogo from "../assets/Leapfrog_logo.jpg"

const Navbar = () => {
    return (
        <nav className = "w-full bg-white border-b border-gray-100 sticky top-0 z-50">{/*Container*/}
        <div className ="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                {/* Now this part is left side logo :*/}
                <div className="flex-shrink-0 flex items-center">
                    {/*This is for the image*/}
                <img 
                src={leapfrogLogo}
                alt = "Leapfrog Logo"
                className="h-8 w-auto"
                />
            {/* <div className="flex-shrink-0 flex items-center">
                <p>LOGO</p>
            </div> */}
            
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar