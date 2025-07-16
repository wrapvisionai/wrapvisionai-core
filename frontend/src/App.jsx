import React from 'react';
import ImageUpload from './components/ImageUpload';
import WrapSelector from './components/WrapSelector';
import VisualizerFooter from './components/VisualizerFooter';

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">WrapVisionAI Visualizer</h1>
      <ImageUpload />
      <WrapSelector />
      <VisualizerFooter />
    </div>
  );
}

export default App;
