import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineMessage } from 'react-icons/ai';
const ChatHome = () => {
    return (
        <div>
            <div className=''>
                <div class="drawer drawer-mobile">
                    <input id="dashboard" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col">
                        {/* Page content here  */}
                        <Outlet />
                    </div>
                    <div class="drawer-side">
                        <label for="dashboard" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto bg-base-100 text-base-content">
            
                            <div class="mt-2">
                                <ul class="space-y-2">
                                    <li>
                                        <Link to="/chat-home" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            <AiOutlineMessage className='text-5xl'/></Link>
                                    </li>
                                    <li>
                                        <Link to="/chat-home" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            <AiOutlineMessage className='text-5xl'/></Link>
                                    </li>
                                    <li>
                                        <Link to="/chat-home" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            <AiOutlineMessage className='text-5xl'/></Link>
                                    </li>
                                    <li>
                                        <Link to="/chat-home" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                            <AiOutlineMessage className='text-5xl'/></Link>
                                    </li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatHome;