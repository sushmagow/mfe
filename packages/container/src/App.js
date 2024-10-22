import React from 'react';
// import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
// import MarkettingApp from './components/MarkettingApp';
// import Header from './components/Header';
import TestComp from './components/TestComp';

// import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

// const  generateClassName= createGenerateClassName({
//     productionPrefix: 'co'
// });

// const router = createBrowserRouter([
//     {
//         path: "/react",
//         element:  <>
//                         <div>
//                             <TestComp />                     
//                             {/* <MarkettingApp /> */}
//                         </div>
//                    </>
                
//     }
// ]);


// export default () => {
//     return (
//         <BrowserRouter>
//             <StylesProvider>
//                 <div>
//                     <Header/>
//                     <TestComp />
//                     <MarkettingApp />
//                 </div>
//             </StylesProvider>
//         // </BrowserRouter>
//     )
// }


// export default () => {
//     return (
//         <RouterProvider router={router} />
//     )
// }

export default () => {
    return (
        <TestComp /> 
    )
}