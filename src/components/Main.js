import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa'; // Import the spinner icon from react-icons
import Categories from './Categories';
import Filter from './Filter';
import Publicity from './Publicity';
import Restos from './Restos';
import PopularRestos from './PopularRestos';
import TrendingPlat from './TrendingPlat';
import MostSales from './MostSales';
import Myplats from './MyPlats';
import FilteredPlats from './FilterePlats'// Import the new component
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const Main = ({ selectedLanguage }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const { t } = useTranslation();
    const direction = i18n.dir();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        // Simulate fetching data or any async operations
        const fetchData = async () => {
            try {
                // Fetch your data here
                await Promise.all([
                    // Replace these with actual API calls or async operations
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/categories'),
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/filters'),
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos'),
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two'),
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/trending'),
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/restos/popular'),
                    axios.get('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/plats/two'),
                ]);

                // Set loading to false once all data is fetched successfully
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Handle error case
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="osahan-main">
            {isLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <FaSpinner className="animate-spin text-4xl text-gray-500" />
                        {/* You can style the spinner using CSS classes */}
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
                </>
            )}
        </div>
    );
};

export default Main;
