import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Footer = () => {
    const { t } = useTranslation();
    const isRTL = i18n.language === 'ar';
    return (
        <div className={`osahan-menu-fotter border rounded shadow fixed-bottom bg-white m-3 px-3 py-2 text-center ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className="row">
                <div className="col selected">
                    <Link to="/" className="text-danger small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-home text-danger" /></p>
                        {t('home')}
                    </Link>
                </div>
                <div className="col">
                    <Link to="/most_popular" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-map-pin" /></p>
                        {t('trending')}
                    </Link>
                </div>
                <div className="col osahan-menu-logo">
                    <Link to="/checkout" className="text-white small font-weight-bold text-decoration-none">
                        <img src="https://res.cloudinary.com/dz4pww2qv/image/upload/v1717849293/ufimygjz6fokrysvbrp6.png" className="img-fluid" />
                    </Link>
                </div>
                <div className="col">
                    <Link to="/favorites" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-heart" /></p>
                        {t('favorites')}
                    </Link>
                </div>
                <div className="col">
                    <Link to="/profile" className="text-dark small font-weight-bold text-decoration-none">
                        <p className="h4 m-0"><i className="feather-user" /></p>
                        {t('profile')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
