import React, { useState } from 'react';

const InquiryForm = ({ onAddInquiry }) => {
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        mobileNumber: '',
        status: 'Pending',
        location: '',
        payment: '',
        reason: '',
        time: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddInquiry(formData);
        // Reset the form after submission
        setFormData({
            name: '',
            businessName: '',
            mobileNumber: '',
            status: 'Pending',
            location: '',
            payment: '',
            reason: '',
            time: ''
        });
    };

    return (
        <div className="max-w-md  mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-6">Add New Inquiry</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="businessName">
                        Business Name
                    </label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="mobileNumber">
                        Mobile Number
                    </label>
                    <input
                        type="text"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Final">Final</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancel">Cancel</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="payment">
                        Payment
                    </label>
                    <input
                        type="text"
                        id="payment"
                        name="payment"
                        value={formData.payment}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="reason">
                        Reason (If Pending)
                    </label>
                    <input
                        type="text"
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                        Time to Shoot Video
                    </label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Add Inquiry
                </button>
            </form>
        </div>
    );
};

export default InquiryForm;
