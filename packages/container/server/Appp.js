const React  = require('react');
const App = require('../src/App').default;
export default function Appp() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="stylesheet" href="/styles.css"></link> */}
          <title>My app</title>
        </head>
        <body>
          <App />
        </body>
      </html>
    );
  }