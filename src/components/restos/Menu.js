import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Menu = () => {

    return (
        <div>
            <div classname="row">
                <h6 classname="mb-3 mt-3 col-md-12">Quick Bites <small classname="text-black-50">3 ITEMS</small></h6>
                <div classname="col-md-12 px-0 border-top">
                    <div classname="bg-white mb-4">
                        <div classname="p-3 border-bottom gold-members d-flex">
                            <div classname="media">
                                <div classname="mr-3 font-weight-bold text-danger non_veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="{16}" height="{16}" fill="currentColor" classname="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="{8}" cy="{8}" r="{8}" />
                                    </svg>
                                </div>
                                <div classname="media-body">
                                    <h6 classname="mb-1">Chicken Tikka Sub </h6>
                                    <p classname="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span classname="ml-auto"><a href="checkout.html" classname="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                        <div classname="p-3 border-bottom gold-members d-flex">
                            <div classname="media">
                                <div classname="mr-3 font-weight-bold text-danger non_veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="{16}" height="{16}" fill="currentColor" classname="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="{8}" cy="{8}" r="{8}" />
                                    </svg>
                                </div>
                                <div classname="media-body">
                                    <h6 classname="mb-1">Cheese corn Roll <span classname="badge badge-danger">BEST SELLER</span></h6>
                                    <p classname="text-muted mb-0">$600</p>
                                </div>
                            </div>
                            <div classname="osahan-quantity ml-auto">
                                <input type="button" defaultvalue="-" classname="minus" />
                                <input type="text" name="quantity" defaultvalue="{1}" title="Qty" classname="qty" size="{4}" />
                                <input type="button" defaultvalue="+" classname="plus" />
                            </div>
                        </div>
                        <div classname="p-3 border-bottom gold-members d-flex">
                            <div classname="media">
                                <div classname="mr-3 font-weight-bold text-danger non_veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="{16}" height="{16}" fill="currentColor" classname="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="{8}" cy="{8}" r="{8}" />
                                    </svg>
                                </div>
                                <div classname="media-body">
                                    <h6 classname="mb-1">Chicken Tikka Sub <span classname="badge badge-danger text-white">Non veg</span>
                                    </h6>
                                    <p classname="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <div classname="osahan-quantity ml-auto">
                                <input type="button" defaultvalue="-" classname="minus" />
                                <input type="text" name="quantity" defaultvalue="{1}" title="Qty" classname="qty" size="{4}" />
                                <input type="button" defaultvalue="+" classname="plus" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h6 className="mb-3 mt-3 col-md-12">Starters <small className="text-black-50">3 ITEMS</small></h6>
                <div className="col-md-12 px-0 border-top">
                    <div className="bg-white mb-4">
                        <div className="p-3 border-bottom menu-list d-flex">
                            <div className="media">
                                <img src="img/starter1.jpg" alt className="mr-3 rounded-pill " />
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub </h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                        <div className="p-3 border-bottom menu-list d-flex">
                            <div className="media">
                                <img src="img/starter2.jpg" alt className="mr-3 rounded-pill " />
                                <div className="media-body">
                                    <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                    <p className="text-muted mb-0">$600</p>
                                </div>
                            </div>
                            <div className="osahan-quantity ml-auto">
                                <input type="button" defaultValue="-" className="minus" />
                                <input type="text" name="quantity" defaultValue={1} title="Qty" className="qty" size={4} />
                                <input type="button" defaultValue="+" className="plus" />
                            </div>
                        </div>
                        <div className="p-3 border-bottom menu-list d-flex">
                            <div className="media">
                                <img src="img/starter3.jpg" alt className="mr-3 rounded-pill " />
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h6 className="mb-3 mt-3 col-md-12">Soups <small className="text-black-50">8 ITEMS</small></h6>
                <div className="col-md-12 px-0 border-top">
                    <div className="bg-white">
                        <div className="p-3 border-bottom gold-members d-flex">
                            <div className="media">
                                <div className="mr-3 font-weight-bold text-danger non_veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub </h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                        <div className="p-3 border-bottom gold-members d-flex">
                            <div className="media">
                                <div className="mr-3 font-weight-bold text-danger non_veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                                <div className="media-body">
                                    <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                    <p className="text-muted mb-0">$600</p>
                                </div>
                            </div>
                            <div className="osahan-quantity ml-auto">
                                <input type="button" defaultValue="-" className="minus" />
                                <input type="text" name="quantity" defaultValue={1} title="Qty" className="qty" size={4} />
                                <input type="button" defaultValue="+" className="plus" />
                            </div>
                        </div>
                        <div className="p-3 border-bottom gold-members d-flex">
                            <div className="media">
                                <div className="mr-3 font-weight-bold text-success veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                        <div className="p-3 border-bottom gold-members d-flex">
                            <div className="media">
                                <div className="mr-3 font-weight-bold text-success veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub </h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                        <div className="p-3 border-bottom gold-members d-flex">
                            <div className="media">
                                <div className="mr-3 font-weight-bold text-danger non_veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                                <div className="media-body">
                                    <h6 className="mb-1">Cheese corn Roll <span className="badge badge-danger">BEST SELLER</span></h6>
                                    <p className="text-muted mb-0">$600</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                        <div className="p-3 border-bottom gold-members d-flex">
                            <div className="media">
                                <div className="mr-3 font-weight-bold text-success veg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx={8} cy={8} r={8} />
                                    </svg>
                                </div>
                                <div className="media-body">
                                    <h6 className="mb-1">Chicken Tikka Sub <span className="badge badge-success">Pure Veg</span></h6>
                                    <p className="text-muted mb-0">$250</p>
                                </div>
                            </div>
                            <span className="ml-auto"><a href="checkout.html" className="btn btn-outline-secondary btn-sm add-sm-btn">ADD</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default Menu;