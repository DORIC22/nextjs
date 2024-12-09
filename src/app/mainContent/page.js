import React from 'react';
import Alert from "@/components/alert";
import Adaptive from "@/components/adaptive";

const Page = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <Alert message={'Текст передан через пропс'} duration={5000}/>
            <Adaptive/>
        </div>
    );
};

export default Page;
