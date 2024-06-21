import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className='ml-5 mt-3'>
                    <h2 className="text-3xl mb-4">Tổng quan</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-orange-300	p-5 shadow-md rounded-lg	">
                            <h3 className="text-xl font-medium">Đặt lịch hôm nay</h3>
                            <p className="text-2xl">xx</p>
                        </div>
                        <div className="bg-red-400 p-5 shadow-md rounded-lg">
                            <h3 className="text-xl font-medium">Phòng đang sử dụng</h3>
                            <p className="text-2xl">xx/xx</p>
                        </div>
                        <div className="bg-amber-300 p-5 shadow-md rounded-lg">
                            <h3 className="text-xl font-medium">Khách hàng mới</h3>
                            <p className="text-2xl">xx</p>
                        </div>
                        <div className="bg-lime-300 p-5 shadow-md rounded-lg">
                            <h3 className="text-xl font-medium">Doanh thu hôm nay</h3>
                            <p className="text-2xl">$x.xxx.xxx</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard
