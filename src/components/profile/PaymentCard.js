import React from 'react';


const PaymentCard = () => {
    return (
        <div className="modal fade" id="paycard" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content ">
                    <div className="modal-header align-items-center">
                        <h5 className="modal-title" id="exampleModalLabel">Add Credit/Debit Card</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="feather-x float-right" />
                        </button>
                    </div>
                    <div className="modal-body">
                        <h6 className="m-0 text-lg font-semibold">Add new card</h6>
                        <p className="text-sm">WE ACCEPT <span className="osahan-card ml-2 font-weight-bold">( Master Card / Visa Card / Rupay )</span></p>
                        <form>
                            <div className="form-row">
                                <div className="col-md-12 form-group">
                                    <label className="form-label mb-1 text-lg font-semibold">Card number</label>
                                    <div className="input-group">
                                        <input placeholder="Card number" type="number" className="form-control" />
                                        <div className="input-group-append"><button id="button-addon2" type="button" className="btn btn-outline-secondary"><i className="feather-credit-card" /></button></div>
                                    </div>
                                </div>
                                <div className="col-md-8 form-group"><label className="form-label mb-1 text-lg font-semibold">Valid through(MM/YY)</label><input placeholder="Enter Valid through(MM/YY)" type="number" className="form-control" /></div>
                                <div className="col-md-4 form-group"><label className="form-label mb-1 text-lg font-semibold">CVV</label><input placeholder="Enter CVV Number" type="number" className="form-control" /></div>
                                <div className="col-md-12 form-group"><label className="form-label mb-1 text-lg font-semibold">Name on card</label><input placeholder="Enter Card number" type="text" className="form-control" /></div>
                                <div className="col-md-12 form-group mb-0">
                                    <div className="custom-control custom-checkbox"><input type="checkbox" id="custom-checkbox1" className="custom-control-input" /><label title type="checkbox" htmlFor="custom-checkbox1" className="custom-control-label text-xs font-semibold pt-1">Securely save this card for a faster checkout next time.</label></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer p-0 border-0 p-3">
                        <div className="col-6 m-0 pl-0 pr-1">
                            <button type="button" className="btn border btn-lg btn-block" data-dismiss="modal">Close</button>
                        </div>
                        <div className="col-6 m-0 pr-0 pl-1">
                            <button type="button" className="btn btn-primary btn-lg btn-block">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PaymentCard;
