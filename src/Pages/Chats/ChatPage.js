import React from 'react';

const ChatPage = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div className='flex gap-5'>
                        <div class="avatar">
                            <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                            </div>
                        </div>
                        <div>
                            <h4>Name</h4>
                            <p className='font-xs text-gray-300'>Online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;