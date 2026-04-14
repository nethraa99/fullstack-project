import { lazy, Suspense, useEffect } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {

  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    fetch(`${API}/api`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HeavyComponent />
    </Suspense>
  );
}

export default App;