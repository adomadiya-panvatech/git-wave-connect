
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Plus, Tags } from 'lucide-react';

const Taxonomy = () => {
  const [newCategoryName, setNewCategoryName] = useState('');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Taxonomy</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
          Usage Metrics
        </Button>
      </div>

      {/* Add New Category */}
      <Card className="border-gray-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-gray-600" />
            </div>
            <div className="flex-1">
              <div className="w-64 h-8 bg-red-100 border-l-4 border-red-500 flex items-center px-3">
                <span className="text-red-700 text-sm">New Category Name</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      <Card className="border-gray-200">
        <CardContent className="p-12 text-center">
          <div className="text-gray-500">
            <Tags className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No categories yet</h3>
            <p className="text-gray-500 mb-4">
              Start organizing your content by creating taxonomy categories
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              <Plus className="w-4 h-4 mr-2" />
              Create First Category
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Taxonomy;
