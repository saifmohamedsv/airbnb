import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 gap-y-10 px-32 py-14 md:grid-cols-4 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesome clone</p>
        <p>Referrals accepted</p>
        <p>Saif Mohamed</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Saif Mohamed</p>
        <p>Presents</p>
        <p>This awesome clone</p>
        <p>Build yours</p>
        <p>click here</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help & Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi Linkedin</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </footer>
  );
};

export default Footer;
