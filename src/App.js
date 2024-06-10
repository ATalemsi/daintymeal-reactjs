
import React, { useEffect } from 'react';
import AppRouter from './route/AppRouter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 


function App() {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
         // Load jQuery first
      await loadScript('/vendor/jquery/jquery.min.js');
      
      // Check if jQuery is loaded
      if (typeof window.$ === 'undefined') {
        throw new Error('jQuery did not load');
      }

      // Load other scripts sequentially
      await loadScript('/vendor/bootstrap/js/bootstrap.bundle.min.js');
      await loadScript('/vendor/slick/slick.min.js');
      await loadScript('/vendor/sidebar/hc-offcanvas-nav.js');
      await loadScript('/vendor/build/js/intlTelInput.min.js');

        if (window.$) {
          window.$('[data-toggle="tooltip"]').tooltip();

          window.$('.plus').on('click', function () {
            if (window.$(this).prev().val()) {
              window.$(this).prev().val(+window.$(this).prev().val() + 1);
            }
          });

          window.$('.minus').on('click', function () {
            if (window.$(this).next().val() > 1) {
              if (window.$(this).next().val() > 1) window.$(this).next().val(+window.$(this).next().val() - 1);
            }
          });

          if (window.$('.offer-slider').length) {
            window.$('.offer-slider').slick({
              centerMode: true,
              slidesToShow: 2,
              centerPadding: '30px',
              slidesToScroll: 2,
              autoplay: true,
              autoplaySpeed: 2000,
              arrows: false
            });
          }

          if (window.$('.cat-slider').length) {
            window.$('.cat-slider').slick({
              centerMode: true,
              slidesToShow: 4,
              centerPadding: '30px',
              slidesToScroll: 4,
              autoplay: false,
              autoplaySpeed: 2000,
              arrows: false
            });
          }

          if (window.$('.trending-slider').length) {
            window.$('.trending-slider').slick({
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '30px',
              arrows: false,
              responsive: [{
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  infinite: true,
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              }
              ]
            });
          }

          if (window.$('.osahan-slider').length) {
            window.$('.osahan-slider').slick({
              centerMode: false,
              slidesToShow: 1,
              arrows: false,
              dots: true
            });
          }

          if (window.$('.osahan-slider-map').length) {
            window.$('.osahan-slider-map').slick({
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 2,
              arrows: false,
              responsive: [{
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              }
              ]
            });
          }

          const $main_nav = window.$('#main-nav');
          const $toggle = window.$('.toggle');
          const defaultOptions = {
            disableAt: false,
            customToggle: $toggle,
            levelSpacing: 40,
            navTitle: 'Askbootstrap',
            levelTitles: true,
            levelTitleAsBack: true,
            pushContent: '#container',
            insertClose: 2
          };

          if ($main_nav.length) {
            $main_nav.hcOffcanvasNav(defaultOptions);
          }

          const input = document.querySelector("#phone");
          if (input) {
            window.intlTelInput(input, {
              preferredCountries: ['in', 'us'],
              utilsScript: "build/js/utils.js",
            });
          }
        }
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    return () => {
      // Cleanup scripts if needed
    };
  }, []);
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
