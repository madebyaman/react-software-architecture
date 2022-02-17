import React, { lazy, Suspense } from 'react';
const One = lazy(() => import('./One'));
const Two = lazy(() => import('./Two'));
const Three = lazy(() => import('./Three'));

const About = () => {
  const [showComponent, setShowComponent] = React.useState(false);

  return (
    <>
      <h1>About</h1>
      <button onClick={() => setShowComponent(true)}>Show components</button>
      {showComponent && (
        <Suspense fallback={<p>Loading...</p>}>
          <One />
          <Two />
          <Three />
        </Suspense>
      )}
    </>
  );
};

export default About;
