import {mount} from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

export default () => {
    const ref = useRef(null);
    const navigate = useNavigate();



    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({pathname: nextPathname}) => {
                const  { pathname } = history.location;
                if(nextPathname!== pathname)
                navigate(nextPathname)
            }
        });
        // history.listen(onParentNavigate)
    }, [])

    return <div ref={ref} />
}