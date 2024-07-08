import React from 'react';

const OpenAppButton = () => {
  const openApp = () => {
    const appScheme = 'daintymeal://';
    const fallbackUrl = 'http://16.171.249.243/daintymeal-betaApk/beta15.0.apk'; // Replace with your app's website or store link

    // Try to open the app using the URL scheme
    window.location.href = appScheme;

    // Fallback to the app website/store after a short delay
    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 500);
  };

  return (
    <div className=" top-0 w-full flex justify-between items-center p-2 bg-white shadow z-50 sticky top-0 z-9">
      <div className="flex items-center">
      <a className="toggle text-dark hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
          <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </a>
        <img src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717849293/ufimygjz6fokrysvbrp6.png" className="w-8 h-8 ml-4" alt="Logo" />
      </div>
      <button
        onClick={openApp}
        className="bg-rose-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-pink-500 flex items-center space-x-2"
      >
        <span className="font-bold">Open App</span>
      </button>
    </div>
  );
};

export default OpenAppButton;
