import React from 'react';

const Adaptive = () => {
    return (
        <div className="w-full lg:mx-16 md:mx-10 sm:mx-2 lg:bg-white md:bg-yellow-300 sm:bg-red-500 border border-black bg-black mx-2
        flex flex-col rounded-xl lg:p-8 md:p-4 sm:2 xs:1">
            <div className={'w-full bg-blue-100 lg:mb-6 sm:mb-2 mb-2'}>
                <a className={'text-black lg:text-xl sm:text-sm'}>Параметр 1: </a>
                <input className={'lg:w-96 md:w-60 sm:w-32 w-2/5 bg-white border border-black p-2 text-black rounded-xl'}/>
                <a className={'text-black lg:text-xl sm:text-sm'}>CheckBox:  </a>
                <input className={''} type={"checkbox"}></input>
            </div>
            <div className={'w-full bg-blue-100 lg:mb-6 sm:mb-2 mb-2'}>
                <a className={'text-black lg:text-xl sm:text-sm'}>Параметр 1: </a>
                <input className={'lg:w-96 md:w-60 sm:w-32 w-2/5 bg-white border border-black p-2 text-black rounded-xl'}/>
                <a className={'text-black lg:text-xl sm:text-sm'}>Number: </a>
                <input className={'w-12 text-black'} type={"number"}></input>
            </div>
            <div className={'w-full bg-blue-100 lg:mb-6 sm:mb-2 mb-2'}>
                <a className={'text-black lg:text-xl sm:text-sm'}>Параметр 1: </a>
                <input className={'lg:w-96 md:w-60 sm:w-32 w-2/5 bg-white border border-black p-2 text-black rounded-xl'}/>
                <a className={'text-black lg:text-xl sm:text-sm'}>Color: </a>
                <input className={''} type={"color"}></input>
            </div>
            <div className={'w-full bg-blue-100 lg:mb-6 sm:mb-2 mb-2'}>
                <a className={'text-black lg:text-xl sm:text-sm'}>Параметр 1: </a>
                <input className={'lg:w-96 md:w-60 sm:w-32 w-2/5 bg-white border border-black p-2 text-black rounded-xl'}/>
                <a className={'text-black lg:text-xl sm:text-sm'}>RadioButton: </a>
                <input className={''} type={"radio"}></input>
            </div>
            <div className={'w-full bg-blue-100'}>
                <a className={'text-black lg:text-xl sm:text-sm'}>Параметр 1: </a>
                <input className={'lg:w-96 md:w-60 sm:w-32 w-2/5 bg-white border border-black p-2 text-black rounded-xl'}/>
                <a className={'text-black lg:text-xl sm:text-sm'}>CheckBox: </a>
                <input className={''} type={"file"}></input>
            </div>
        </div>
    );
};

export default Adaptive;