import React from 'react';

// Placeholder component for Spline model
const LazySplineModel = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        color: '#915EFF',
        fontSize: '1.2rem',
        fontWeight: 'bold'
      }}>
        Spline Model will be fetched by link
      </div>
    </div>
  );
};

export default LazySplineModel;
