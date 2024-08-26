import React, { useEffect, useState } from 'react';
import inquiries from './inquiries';

const InquiryTable = () => {
    const [statusFilter, setStatusFilter] = useState('All');
    const [filteredInquiries, setFilteredInquiries] = useState([]);

    useEffect(() => {
        const filteredInquiries = inquiries.filter(
            inquiry => statusFilter === 'All' || inquiry.status === statusFilter
        );
        setFilteredInquiries(filteredInquiries);
    }, [statusFilter]);

    const changeStatusHandler = (ind, status) => {
        let newArr = filteredInquiries.find((x, i) => i === ind);
        newArr.status = status;
        setFilteredInquiries([...filteredInquiries]);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Cancel':
                return 'bg-red-500 text-white px-2 py-1 rounded';
            case 'Completed':
                return 'bg-green-500 text-white px-2 py-1 rounded';
            case 'Pending':
                return 'bg-yellow-500 text-white px-2 py-1 rounded';
            case 'Final':
                return 'bg-blue-500 text-white px-2 py-1 rounded';
            default:
                return 'bg-gray-500 text-white px-2 py-1 rounded';
        }
    };

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Inquiry List</h2>
                <div className="mb-4">
                    <label className="mr-2 font-semibold">Filter by Status:</label>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border p-2 rounded"
                    >
                        <option value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancel">Cancel</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto p-4">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Business Name</th>
                            <th className="px-4 py-2 text-left">Mobile Number</th>
                            <th className="px-4 py-2 text-left">Location</th>
                            <th className="px-4 py-2 text-left">Payment</th>
                            <th className="px-4 py-2 text-left">Reason</th>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredInquiries.map((inquiry, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{inquiry.name}</td>
                                <td className="px-4 py-2">{inquiry.businessName}</td>
                                <td className="px-4 py-2">{inquiry.mobileNumber}</td>
                                <td className="px-4 py-2">{inquiry.location}</td>
                                <td className="px-4 py-2">{inquiry.payment}</td>
                                <td className="px-4 py-2">{inquiry.reason}</td>
                                <td className="px-4 py-2">{inquiry.time}</td>
                                <td className="px-4 py-2">
                                    <select
                                        className={`${getStatusClass(inquiry.status)} px-3 py-2 border rounded `}
                                        id="status"
                                        name="status"
                                        onChange={(e) => changeStatusHandler(index, e.target.value)}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Final">Final</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Cancel">Cancel</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default InquiryTable;
