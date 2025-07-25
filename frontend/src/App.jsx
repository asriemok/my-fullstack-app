import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(setData);
  }, []);

  return <h1>{data}</h1>;
}

export default App;
