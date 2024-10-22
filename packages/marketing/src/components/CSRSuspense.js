import React, { Suspense, useEffect, useState } from 'react';

const Loading = () => {
    return <h2>loading....</h2>
}

let dData = null;
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dData = {user: 'Subha', fav: 'pets'};
            resolve();
        }, 1000)
    });
};

const Comp = () => {
    const [data, setData] = useState(dData);
    if(!data) {
        throw fetchData();
    }
    return (
        <>
            {data && (
                <p>
                    User: {data.user}
                </p>
            )}
        </>
    )
};

const CSRSuspense = () => {
    return (
        <>
            <Suspense fallback={<Loading /> } >
               <Comp />
            </Suspense>
        </>
    )
}

export default CSRSuspense