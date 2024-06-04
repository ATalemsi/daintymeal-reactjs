// src/components/Header.js
import React from 'react';

const FilterDetaille = () => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header align-items-center">
                        <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="feather-x float-right" />
                        </button>
                    </div>
                    <div className="modal-body p-0">
                        <div className="osahan-filter">
                            <div className="filter">
                                <div className="filters-body">
                                    <div id="accordion">
                                        <div className="filters-card border-bottom">
                                            <div className="filters-card-header" id="headingOne">
                                                <h6 className="mb-0">
                                                    <a href="#" className="btn-link p-3" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Location <i className="feather-chevron-down float-right" />
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="filters-card-body pb-3 card-shop-filters">
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb1" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb1">Apollo Bandar <small className="text-black-50">230</small>
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb2" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb2">Bahadur Bapat Road <small className="text-black-50">95</small>
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb3" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb3">Colaba Mumbai <small className="text-black-50">35</small>
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb4" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb4">College Road <small className="text-black-50">46</small>
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb5" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb5">Mathuradas Mills <small className="text-black-50">20</small></label>
                                                    </div>
                                                    <div className="mt-1 px-3"><a href="#" className="link">See all</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filters-card border-bottom">
                                            <div className="filters-card-header" id="headingTwo">
                                                <h6 className="mb-0">
                                                    <a href="#" className="btn-link p-3" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                                                        All cuisines
                                                        <i className="feather-chevron-down float-right" />
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="collapsetwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="filters-card-body pb-3 card-shop-filters">
                                                    <form className="filters-search px-3">
                                                        <div className="form-group mb-2 position-relative">
                                                            <i className="feather-search" />
                                                            <input type="text" className="form-control" placeholder="Start typing to search..." />
                                                        </div>
                                                    </form>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb6" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb6">American <small className="text-black-50">156</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb7" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb7">Pizza <small className="text-black-50">120</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb8" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb8">Healthy <small className="text-black-50">130</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb9" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb9">Vegetarian <small className="text-black-50">120</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb10" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb10"> Chinese <small className="text-black-50">111</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb11" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb11"> Hamburgers <small className="text-black-50">95</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb12" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb12"> Dessert <small className="text-black-50">50</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb13" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb13"> Chicken <small className="text-black-50">32</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb14" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb14"> Indian <small className="text-black-50">156</small></label>
                                                    </div>
                                                    <div className="mt-1 px-3"><a href="#" className="link">See all</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filters-card border-bottom">
                                            <div className="filters-card-header" id="headingCategory">
                                                <h6 className="mb-0">
                                                    <a href="#" className="btn-link p-3" data-toggle="collapse" data-target="#collapseFeature" aria-expanded="true" aria-controls="collapseFeature">
                                                        Feature <i className="feather-chevron-down float-right" />
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="collapseFeature" className="collapse" aria-labelledby="headingCategory" data-parent="#accordion">
                                                <div className="filters-card-body pb-3 card-shop-filters">
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb15" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb15">Free Delivery <small className="text-black-50">156</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb26" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb26">Coupons <small className="text-black-50">120</small></label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb37" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb37">Open Now [1:31am] <small className="text-black-50">85</small>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filters-card border-bottom">
                                            <div className="filters-card-header" id="headingOffer">
                                                <h6 className="mb-0">
                                                    <a href="#" className="btn-link p-3" data-toggle="collapse" data-target="#collapseOffer" aria-expanded="true" aria-controls="collapseOffer">
                                                        Delivery time <i className="feather-chevron-down float-right" />
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="collapseOffer" className="collapse" aria-labelledby="headingOffer" data-parent="#accordion">
                                                <div className="filters-card-body pb-3 card-shop-filters">
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb19" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb19">Any Time </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb20" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb20">25 min
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb36" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb36">30 min
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb47" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb47">40 min
                                                        </label>
                                                    </div>
                                                    <div className="custom-control custom-checkbox p-0">
                                                        <input type="checkbox" className="custom-control-input" id="cb58" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="cb58">50 min
                                                        </label>
                                                    </div>
                                                    <div className="mt-1 px-3"><a href="#" className="link">See all</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filters-card border-bottom">
                                            <div className="filters-card-header" id="headingCategory">
                                                <h6 className="mb-0">
                                                    <a href="#" className="btn-link p-3" data-toggle="collapse" data-target="#collapseCategory" aria-expanded="true" aria-controls="collapseCategory">
                                                        Sort By <i className="feather-chevron-down float-right" />
                                                    </a>
                                                </h6>
                                            </div>
                                            <div id="collapseCategory" className="collapse" aria-labelledby="headingCategory" data-parent="#accordion">
                                                <div className="filters-card-body pb-3 card-shop-filters">
                                                    <div className="custom-control px-0 custom-radio">
                                                        <input type="radio" id="customRadio1" name="location" className="custom-control-input" defaultChecked />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="customRadio1">Top Rated</label>
                                                    </div>
                                                    <div className="custom-control px-0 custom-radio">
                                                        <input type="radio" id="customRadio2" name="location" className="custom-control-input" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="customRadio2">Nearest Me</label>
                                                    </div>
                                                    <div className="custom-control px-0 custom-radio">
                                                        <input type="radio" id="customRadio3" name="location" className="custom-control-input" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="customRadio3">Cost High to Low</label>
                                                    </div>
                                                    <div className="custom-control px-0 custom-radio">
                                                        <input type="radio" id="customRadio4" name="location" className="custom-control-input" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="customRadio4">Cost Low to High</label>
                                                    </div>
                                                    <div className="custom-control px-0 custom-radio">
                                                        <input type="radio" id="customRadio5" name="location" className="custom-control-input" />
                                                        <label className="custom-control-label py-1 w-100 px-3" htmlFor="customRadio5">Most Popular</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer p-0 border-0 p-3">
                        <div className="col-6 m-0 pl-0 pr-1">
                            <button type="button" className="btn border btn-lg btn-block" data-dismiss="modal">Clear</button>
                        </div>
                        <div className="col-6 m-0 pr-0 pl-1">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-dismiss="modal">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterDetaille;
