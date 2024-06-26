import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import Categories from './Categories';
import Filter from './Filter';
import Publicity from './Publicity';
import Restos from './Restos';
import PopularRestos from './PopularRestos';
import TrendingPlat from './TrendingPlat';
import MostSales from './MostSales';
import Myplats from './MyPlats';
import FilteredPlats from './FilterePlats';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Main = ({ selectedLanguage }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoadingAdditional, setIsLoadingAdditional] = useState(false);
    const [additionalDataLoaded, setAdditionalDataLoaded] = useState(false);
    const { t } = useTranslation();
    const direction = i18n.dir();

    const fetchInitialData = async () => {
        try {
            await Promise.all([
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/categories'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/filters'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos'),
            ]);
            setIsLoadingInitial(false);
        } catch (error) {
            console.error('Error fetching initial data:', error);
            setIsLoadingInitial(false);
        }
    };

    const fetchAdditionalData = async () => {
        setIsLoadingAdditional(true);
        try {
            await Promise.all([
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/trending'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/popular'),
                axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two'),
            ]);
            setIsLoadingAdditional(false);
            setAdditionalDataLoaded(true);
        } catch (error) {
            console.error('Error fetching additional data:', error);
            setIsLoadingAdditional(false);
        }
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    const observerRef = useRef();

    useEffect(() => {
        if (!isLoadingInitial && !additionalDataLoaded) {
            observerRef.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        fetchAdditionalData();
                        observerRef.current.disconnect();
                    }
                },
                { threshold: 0.1 }
            );

            if (document.querySelector('#load-trigger')) {
                observerRef.current.observe(document.querySelector('#load-trigger'));
            }
        }
    }, [isLoadingInitial, additionalDataLoaded]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="osahan-main">
            {isLoadingInitial ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <FaSpinner className="animate-spin text-4xl text-gray-500" />
                        <h3 className="mt-2">Loading...</h3>
                    </div>
                </div>
            ) : (
                <>
                    <div style={{ direction: 'ltr' }}>
                        <Categories selectedLanguage={selectedLanguage} onCategorySelect={handleCategorySelect} />
                    </div>
                    <Filter />
                    <Publicity />
                    <div className="px-3 pt-4 pb-3 title d-flex align-items-center">
                        <h6 className="m-0 font-weight-bold text-2xl"> {t('restaurant')} </h6>
                        <a className="font-weight-bold ml-auto text-pink-800 text-sm" href="most_popular.html">{t('Viewall')}<i className="feather-chevrons-right" /></a>
                    </div>
                    <Restos selectedLanguage={selectedLanguage} selectedCategory={selectedCategory} />
                    {selectedCategory ? (
                        <>
                            <FilteredPlats selectedCategory={selectedCategory} />
                        </>
                    ) : (
                        <>
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
                    {/* Add a hidden element that will trigger the fetching of additional data */}
                    <div id="load-trigger" className="w-full h-1"></div>
                    {isLoadingAdditional && (
                        <div className="flex items-center justify-center py-4">
                            <FaSpinner className="animate-spin text-4xl text-gray-500" />
                            <h3 className="ml-2">Loading...</h3>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Main;
