function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <div>
                <button onClick={scrollToTop} className="mt-2 text-white py-4 text-sm w-full bg-gray-700 hover:bg-gray-600">Back to top</button>
            </div>
            <div className="grid grid-flow-col grid-cols-4 bg-gray-800 shadow-lg text-white px-20 py-10">
                <div className="px-10 leading-10">
                    <p className="font-bold">Get to Know Us</p>
                    <p className="text-sm leading-7 text-gray-300">About Us</p>
                    <p className="text-sm leading-7 text-gray-300">Careers</p>
                    <p className="text-sm leading-7 text-gray-300">Press Releases</p>
                    <p className="text-sm leading-7 text-gray-300">Amazon Cares</p>
                    <p className="text-sm leading-7 text-gray-300">Gift a Smile</p>
                </div>
                <div className="px-10 leading-10">
                    <p className="font-bold">Connect with Us</p>
                    <p className="text-sm leading-7 text-gray-300">Facebook</p>
                    <p className="text-sm leading-7 text-gray-300">Twitter</p>
                    <p className="text-sm leading-7 text-gray-300">Instagram</p>
                </div>
                <div className="px-10 leading-10">
                    <p className="font-bold">Make Money with Us</p>
                    <p className="text-sm leading-7 text-gray-300">Sell on Amazon</p>
                    <p className="text-sm leading-7 text-gray-300">Sell under Amazon Accelerator</p>
                    <p className="text-sm leading-7 text-gray-300">Amazon Global Selling</p>
                    <p className="text-sm leading-7 text-gray-300">Become an Affiliate</p>
                    <p className="text-sm leading-7 text-gray-300">Fulfilment by Amazon</p>
                    <p className="text-sm leading-7 text-gray-300">Advertise Your Products</p>
                    <p className="text-sm leading-7 text-gray-300">Amazon Pay on Merchants</p>
                </div>
                <div className="px-10 leading-10">
                    <p className="text-sm leading-7 text-gray-300" className="font-bold">Let Us Help You</p>
                    <p className="text-sm leading-7 text-gray-300">COVID-19 and Amazon</p>
                    <p className="text-sm leading-7 text-gray-300">Your Account</p>
                    <p className="text-sm leading-7 text-gray-300">Returns Centre</p>
                    <p className="text-sm leading-7 text-gray-300">100% Purchase Protection</p>
                    <p className="text-sm leading-7 text-gray-300">Amazon App Download</p>
                    <p className="text-sm leading-7 text-gray-300">Amazon Assistant Download</p>
                    <p className="text-sm leading-7 text-gray-300">Help</p>
                </div>
            </div>
        </div>
    )
}

export default Footer