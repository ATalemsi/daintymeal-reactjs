import React, { useState } from 'react';
import Categories from './Categories';
import Filter from './Filter';
import Publicity from './Publicity';
import Restos from './Restos';
import PopularRestos from './PopularRestos';
import TrendingPlat from './TrendingPlat';
import MostSales from './MostSales';
import Myplats from './MyPlats';
import FilteredPlats from './FilterePlats' // Import the new component
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Main = ({ selectedLanguage }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { t } = useTranslation();
    const direction = i18n.dir();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="osahan-main">
            <div style={{ direction: 'ltr' }}>
                <Categories selectedLanguage={selectedLanguage} onCategorySelect={handleCategorySelect} />
            </div>
            <Filter />
            <Publicity />
            {selectedCategory ? (
                <>
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl">{t('filteredPlats')}</h6>
                        <a className="font-weight-bold ml-auto" href="trending.html">{t('Viewall')}<i className="feather-chevrons-right" /></a>
                    </div>
                    <FilteredPlats selectedCategory={selectedCategory} />
                </>
            ) : (
                <>
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl"> {t('restaurant')} </h6>
                        <a className="font-weight-bold ml-auto text-pink-800 text-sm" href="most_popular.html">{t('Viewall')}<i className="feather-chevrons-right" /></a>
                    </div>
                    <Restos selectedCategory={selectedCategory} />
                    <div className="px-3 pt-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl"> {t('myPlats')} </h6>
                        <a className="font-weight-bold ml-auto" href="trending.html">{t('Viewall')}<i className="feather-chevrons-right" /></a>
                    </div>
                    <Myplats />
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl">{t('trendingPlat')}</h6>
                        <a className="font-weight-bold ml-auto" href="most_popular.html">{t('Viewall')}<i className="feather-chevrons-right" /></a>
                    </div>
                    <TrendingPlat />
                    <div className="p-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:hidden">
                                <a href="trending.html">
                                    <img src="img/banner1.png" className="w-full md:max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                </a>
                            </div>
                            <div className="hidden md:block col-span-1">
                                <a href="trending.html">
                                    <img src="img/banner1.png" className="max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                </a>
                            </div>
                            <div className="hidden md:block col-span-1">
                                <a href="trending.html">
                                    <img src="img/banner2.png" className="max-w-md mx-auto rounded-lg" alt="Banner 2" />
                                </a>
                            </div>
                            <div className="hidden md:block col-span-1">
                                <a href="trending.html">
                                    <img src="img/banner.png" className="max-w-md mx-auto rounded-lg" alt="Banner 3" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl "> {t('popularRestaurant')} </h6>
                        <a className="font-weight-bold ml-auto" href="most_popular.html">{t('Viewall')}<i className="feather-chevrons-right" /></a>
                    </div>
                    <PopularRestos />
                    <div className="p-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:hidden">
                                <a href="trending.html">
                                    <img src="img/banner1.png" className="w-full md:max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                </a>
                            </div>
                            <div className="hidden md:block col-span-1">
                                <a href="trending.html">
                                    <img src="img/banner1.png" className="max-w-md mx-auto rounded-lg" alt="Banner 1" />
                                </a>
                            </div>
                            <div className="hidden md:block col-span-1">
                                <a href="trending.html">
                                    <img src="img/banner2.png" className="max-w-md mx-auto rounded-lg" alt="Banner 2" />
                                </a>
                            </div>
                            <div className="hidden md:block col-span-1">
                                <a href="trending.html">
                                    <img src="img/banner.png" className="max-w-md mx-auto rounded-lg" alt="Banner 3" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl"> {t('mostSales')} </h6>
                        <a className="font-weight-bold ml-auto" href="most_popular.html">View all<i className="feather-chevrons-right" /></a>
                    </div>
                    <MostSales />
                </>
            )}
        </div>
    );
};

export default Main;
