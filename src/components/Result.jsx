import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { Box, styled } from '@mui/material';

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState('');
  const { html, css, js } = useContext(DataContext);

  const srcCode = `
    <html>
      <head> 
        <style>${css}</style>
      </head>
      <body>
        ${html}
      <script>${js}</script>
      </body>
    </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container style={html || css || js ? null : { background: '#fff' }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
