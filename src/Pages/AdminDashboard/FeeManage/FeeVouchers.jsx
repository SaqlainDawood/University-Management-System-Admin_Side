import React, { useState } from 'react';
import { DollarSign, TrendingUp, Clock, CheckCircle, Search, Filter, Download, Eye, FileText, CreditCard, AlertCircle, Users } from 'lucide-react';

const FeeManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample data
  const stats = [
    { label: 'Total Revenue', value: 'PKR 2,450,000', icon: DollarSign, color: 'bg-green-500', change: '+12.5%' },
    { label: 'Pending Payments', value: 'PKR 450,000', icon: Clock, color: 'bg-yellow-500', change: '23 students' },
    { label: 'Verified Today', value: 'PKR 125,000', icon: CheckCircle, color: 'bg-blue-500', change: '15 payments' },
    { label: 'Overdue', value: 'PKR 85,000', icon: AlertCircle, color: 'bg-red-500', change: '8 students' }
  ];

  const feeVouchers = [
    { id: 'FV-2025-001', student: 'Ali Ahmed', rollNo: 'BS-CS-2021-001', semester: 'Spring 2025', amount: 25000, dueDate: '2025-10-15', status: 'pending' },
    { id: 'FV-2025-002', student: 'Fatima Khan', rollNo: 'BS-IT-2022-045', semester: 'Spring 2025', amount: 25000, dueDate: '2025-10-15', status: 'paid' },
    { id: 'FV-2025-003', student: 'Hassan Raza', rollNo: 'BS-SE-2021-023', semester: 'Spring 2025', amount: 25000, dueDate: '2025-10-15', status: 'overdue' },
    { id: 'FV-2025-004', student: 'Ayesha Malik', rollNo: 'BS-CS-2023-067', semester: 'Spring 2025', amount: 25000, dueDate: '2025-10-15', status: 'pending' },
    { id: 'FV-2025-005', student: 'Usman Ali', rollNo: 'BS-IT-2021-089', semester: 'Spring 2025', amount: 25000, dueDate: '2025-10-15', status: 'paid' }
  ];

  const pendingVerifications = [
    { id: 'PV-001', student: 'Sara Noor', rollNo: 'BS-CS-2022-034', amount: 25000, submittedDate: '2025-10-05', challanNo: 'CH-789456', bank: 'HBL' },
    { id: 'PV-002', student: 'Ahmed Hassan', rollNo: 'BS-IT-2021-056', amount: 25000, submittedDate: '2025-10-06', challanNo: 'CH-789457', bank: 'UBL' },
    { id: 'PV-003', student: 'Zainab Fatima', rollNo: 'BS-SE-2023-012', amount: 25000, submittedDate: '2025-10-06', challanNo: 'CH-789458', bank: 'MCB' }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      paid: { color: 'bg-green-100 text-green-800', label: 'Paid' },
      pending: { color: 'bg-yellow-100 text-yellow-800', label: 'Pending' },
      overdue: { color: 'bg-red-100 text-red-800', label: 'Overdue' },
      verified: { color: 'bg-blue-100 text-blue-800', label: 'Verified' }
    };
    const config = statusConfig[status] || statusConfig.pending;
    return <span className={`px-3 py-1 rounded-full text-xs font-semibold ${config.color}`}>{config.label}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-green-600" />
            Fee Management System
          </h1>
          <p className="text-gray-600 mt-1">Manage fee vouchers, payments, and verifications</p>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  {stat.change}
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md mb-6">
          <div className="border-b border-gray-200">
            <div className="flex gap-2 p-2">
              {[
                { id: 'overview', label: 'Overview', icon: FileText },
                { id: 'vouchers', label: 'Fee Vouchers', icon: FileText },
                { id: 'verify', label: 'Verify Payments', icon: CheckCircle }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Transactions */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      Recent Transactions
                    </h3>
                    <div className="space-y-3">
                      {feeVouchers.slice(0, 3).map(voucher => (
                        <div key={voucher.id} className="bg-white rounded-lg p-4 flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-gray-800">{voucher.student}</p>
                            <p className="text-sm text-gray-500">{voucher.rollNo}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-800">PKR {voucher.amount.toLocaleString()}</p>
                            {getStatusBadge(voucher.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pending Verifications */}
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      Pending Verifications
                    </h3>
                    <div className="space-y-3">
                      {pendingVerifications.map(payment => (
                        <div key={payment.id} className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold text-gray-800">{payment.student}</p>
                            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                              Verify
                            </button>
                          </div>
                          <p className="text-sm text-gray-500">{payment.rollNo} • {payment.bank}</p>
                          <p className="text-sm text-gray-600 mt-1">Challan: {payment.challanNo}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 hover:shadow-lg transition-all flex items-center gap-4">
                    <FileText className="w-8 h-8" />
                    <div className="text-left">
                      <p className="font-bold text-lg">Generate Vouchers</p>
                      <p className="text-sm text-green-100">Create fee vouchers for students</p>
                    </div>
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 hover:shadow-lg transition-all flex items-center gap-4">
                    <Download className="w-8 h-8" />
                    <div className="text-left">
                      <p className="font-bold text-lg">Export Report</p>
                      <p className="text-sm text-blue-100">Download fee collection report</p>
                    </div>
                  </button>
                  <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-6 hover:shadow-lg transition-all flex items-center gap-4">
                    <Users className="w-8 h-8" />
                    <div className="text-left">
                      <p className="font-bold text-lg">Send Reminders</p>
                      <p className="text-sm text-purple-100">Notify pending students</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'vouchers' && (
              <div>
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by student name, roll number, or voucher ID..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="overdue">Overdue</option>
                  </select>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 whitespace-nowrap">
                    <FileText className="w-5 h-5" />
                    Generate Vouchers
                  </button>
                </div>

                {/* Vouchers Table */}
                <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Voucher ID</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Student</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Roll Number</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Semester</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Due Date</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {feeVouchers.map(voucher => (
                        <tr key={voucher.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-sm font-medium text-gray-800">{voucher.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-800">{voucher.student}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{voucher.rollNo}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{voucher.semester}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-800">PKR {voucher.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{voucher.dueDate}</td>
                          <td className="px-6 py-4">{getStatusBadge(voucher.status)}</td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button className="text-blue-600 hover:text-blue-800 transition-colors" title="View">
                                <Eye className="w-5 h-5" />
                              </button>
                              <button className="text-green-600 hover:text-green-800 transition-colors" title="Download">
                                <Download className="w-5 h-5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'verify' && (
              <div>
                <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-900">Payment Verification</p>
                    <p className="text-sm text-blue-700">Review submitted payment challans and verify them carefully before approving.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {pendingVerifications.map(payment => (
                    <div key={payment.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-800 text-lg">{payment.student}</h4>
                              <p className="text-sm text-gray-600">{payment.rollNo}</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Amount</p>
                              <p className="font-semibold text-gray-800">PKR {payment.amount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Challan Number</p>
                              <p className="font-semibold text-gray-800">{payment.challanNo}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Bank</p>
                              <p className="font-semibold text-gray-800">{payment.bank}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Submitted</p>
                              <p className="font-semibold text-gray-800">{payment.submittedDate}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 justify-center">
                            <Eye className="w-4 h-4" />
                            View Challan
                          </button>
                          <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2 justify-center">
                            <CheckCircle className="w-4 h-4" />
                            Approve
                          </button>
                          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors">
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeManagement;