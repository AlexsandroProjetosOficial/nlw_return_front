import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

const Widget = () => {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    return (
        <div className='absolute bottom-5 right-5'>
            {isWidgetOpen && <p>Hello Word</p>}

            <button
                className='bg-brand-500 rounded-full px-3 h-16 text-white flex items-center group'
                onClick={() => setIsWidgetOpen(oldState => !oldState)}
            >
                <ChatTeardropDots className='w-10 h-10' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </button>
        </div>
    );
};

export { Widget };
