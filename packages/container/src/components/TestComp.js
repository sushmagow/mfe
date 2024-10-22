

import React, { Suspense, useEffect, useState, use } from 'react';
import axios from 'axios';

const Loading = () => {
    return <h2>loading....</h2>
}

let dData = null;
const fetchData = () => {
    return new Promise(async(resolve, reject) => {
        const {data}  = await axios.get('https://dogapi.dog/api/v2/breeds');
        dData = data.data
        resolve(dData);
    });
};

const Comp = () => {
    const [data, setData] = useState(dData);
    if(!data) {
        throw fetchData();
    }
    return (
        <>
            {data && data.map((v) => {
                return (
                    <div>
                        {JSON.stringify(v)}
                    </div>
                );
            })}
        </>
    )
};

const TestComp = () => {
    return (
        <>
            <Suspense fallback={<Loading /> } >
               <Comp />
            </Suspense>
        </>
    )
}



export default TestComp