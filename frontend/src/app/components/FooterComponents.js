const FooterComponents = () => {
    return (
        <>
            <footer className="bg-black text-white py-10 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 border-b border-gray-800 pb-8">
                    {/* Useful Links */}
                    <div>
                        <h2 className="text-lg font-bold uppercase mb-4">Useful Links</h2>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Returns</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-white">Refund and Returns Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>
                        <span className="font-bold text-white">FASHIONSTYLE</span> © 2025 CREATED BY <span className="font-bold text-white">FASHIONSTYLE</span>. PREMIUM CLOTHES SELLER.
                    </p>

                    {/* Payment Icons */}
                    {/* <div className="flex gap-3">
                        <img src="/images/visa.png" alt="Visa" className="h-6" />
                        <img src="/images/mastercard.png" alt="MasterCard" className="h-6" />
                        <img src="/images/paypal.png" alt="PayPal" className="h-6" />
                        <img src="/images/amex.png" alt="American Express" className="h-6" />
                        <img src="/images/visa-electron.png" alt="Visa Electron" className="h-6" />
                        <img src="/images/maestro.png" alt="Maestro" className="h-6" />
                    </div> */}
                </div>
            </footer>

        </>
    )
}
export default FooterComponents;