
import React from 'react';
import HTMLCardEditor from '../components/Content/HTMLCardEditor';

const HTMLCardEditorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">HTML Card Editor</h1>
          <p className="text-gray-600">Create, edit, and preview HTML cards with drag-and-drop functionality</p>
        </div>
        <HTMLCardEditor />
      </div>
    </div>
  );
};

export default HTMLCardEditorPage;
