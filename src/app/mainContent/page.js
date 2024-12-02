import React from 'react';
import Alert from "@/components/alert";

const Page = () => {
    return (
        <div>
            <Alert message={'Текст передан через пропс'} duration={5000}/>
        </div>
    );
};

export default Page;
