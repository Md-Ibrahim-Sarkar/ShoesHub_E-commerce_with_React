import React from 'react'

function Footer() {
  return (
    <footer className="py-10 text-center text-gray-700 bg-blue-100">
                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div>
                                <h2 className="text-lg font-bold text-center text-main-color md:justify-start">
                                    ShoesHub
                                </h2>
                                <p className="mt-2 text-sm">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Follow Us</h2>
                                <p className="mt-2 text-sm">
                                    Since the 1500s, when an unknown printer took a galley of type and scrambled.
                                </p>
                                <div className="flex justify-center mt-2 space-x-4 md:justify-start">
                                    <a href="#" className="text-blue-500"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-blue-500"><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Contact Us</h2>
                                <p className="mt-2 text-sm">
                                    E-Comm, 4578 Marmora Road, Glasgow D04 89GR
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-4">
                            <div>
                                <h2 className="text-lg font-bold">Information</h2>
                                <ul className="mt-2 space-y-2 text-sm">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Service</h2>
                                <ul className="mt-2 space-y-2 text-sm">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">My Account</h2>
                                <ul className="mt-2 space-y-2 text-sm">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-lg font-bold">Our Offers</h2>
                                <ul className="mt-2 space-y-2 text-sm">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-4 mt-10 border-t border-gray-300">
                            <p className="text-sm">&copy; 2025 Ecommerce theme by <a target='_blank' href="https://ibrahimsarkar.com/">www.IbrahimSarkar.com</a></p>
                            
                        </div>
                    </div>
                </footer>
  )
}

export default Footer