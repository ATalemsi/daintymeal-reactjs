import React from 'react';


const HistoricTrans = () => {
    return (
        <div className="modal fade" id="transactionModal" tabIndex={-1} role="dialog" aria-labelledby="transactionModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-center align-items-center">
                        <h5 className="modal-title text-xl font-semibold text-gray-900" id="transactionModalLabel">Transaction History</h5>
                        <button type="button" className="close absolute right-4 top-4 text-gray-600 hover:text-gray-800" data-dismiss="modal" aria-label="Close">
                            <i className="feather-x text-xl text-red-500" />
                        </button>
                    </div>
                    <div className="modal-body px-4 py-5">
                        <div className="transaction-item border-b py-3">
                            <h6 className="font-bold text-lg text-gray-900">Order ID: 123456789</h6>
                            <p className="text-sm text-gray-700 mb-1">Date: 2024-06-07</p>
                            <p className="text-sm text-gray-700 mb-1">Amount: $50.00</p>
                            <p className="text-sm text-gray-700 mb-1">Payment Method: Credit Card</p>
                            <p className="text-sm text-gray-700">Status: Completed</p>
                        </div>
                        <div className="transaction-item py-3">
                            <h6 className="font-bold text-lg text-gray-900">Order ID: 987654321</h6>
                            <p className="text-sm text-gray-700 mb-1">Date: 2024-06-06</p>
                            <p className="text-sm text-gray-700 mb-1">Amount: $30.00</p>
                            <p className="text-sm text-gray-700 mb-1">Payment Method: PayPal</p>
                            <p className="text-sm text-gray-700">Status: Refunded</p>
                        </div>
                        {/* Add more transaction items as needed */}
                    </div>
                    <div className="modal-footer p-0 border-0 p-3 flex justify-center">
                        <div className="w-full px-1">
                            <button type="button" className="btn border btn-lg w-full" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoricTrans;
