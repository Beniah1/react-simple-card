import React from 'react';
import SimpleCard from '../SimpleCard';

const App = () => {
  return (
    <div className="App">
      <SimpleCard
        title="React Simple Card"
        description="This is a simple React card component."
        imageUrl="https://th.bing.com/th/id/OIP.lincz0LOB_wjb4sz6hmyVwHaE8?w=4522&h=3015&rs=1&pid=ImgDetMain"
      />
    </div>
  );
};

export default App;
