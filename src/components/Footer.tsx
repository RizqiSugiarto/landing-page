import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:mt-64">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Works</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Help</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Delivery Details</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Free eBooks</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Development Tutorial</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">How to - Blog</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Youtube Playlist</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Customer Support</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Delivery Details</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-700 pt-8">
      <div className="mb-4 lg:mb-0 flex">
        <img src="/img/logo.svg" alt="Logo" className="h-8" />
        <span className='text-white mt-auto ml-2'>Lokotre</span>
      </div>
      <div className="flex space-x-4 mb-4 lg:mb-0">
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github"></i></a>
      </div>
      <p className="text-gray-400 text-center lg:text-left">&copy; Copyright 2024, All Rights Reserved by Rizqi Ganteng</p>
    </div>
  </div>
</footer>

  )
}
