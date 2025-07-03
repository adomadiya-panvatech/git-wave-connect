
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Input } from '../components/ui/input';
import GoalCategoryForm from '../components/Content/GoalCategoryForm';
import { Search, Edit, Trash2 } from 'lucide-react';

const GoalCategories = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const mockCategories = [
    {
      id: 1,
      order: 1,
      image: '/lovable-uploads/0a9970f8-7a6a-4867-944a-b714c26347f8.png',
      name: 'Eat healthier',
      goalTemplates: 20,
      filters: 8
    },
    {
      id: 2,
      order: 2,
      name: 'Control my stress',
      goalTemplates: 15,
      filters: 'none'
    },
    {
      id: 3,
      order: 3,
      name: 'Sleep better',
      goalTemplates: 14,
      filters: 'none'
    },
    {
      id: 4,
      order: 4,
      name: 'Have better relationships',
      goalTemplates: 7,
      filters: 'none'
    },
    {
      id: 5,
      order: 5,
      name: 'Exercise',
      goalTemplates: 17,
      filters: 'none'
    },
    {
      id: 6,
      order: 6,
      name: 'Create work-life balance',
      goalTemplates: 14,
      filters: 'none'
    },
    {
      id: 7,
      order: 7,
      name: 'Connect with others',
      goalTemplates: 12,
      filters: 'none'
    },
    {
      id: 8,
      order: 8,
      name: 'Have structure in your day',
      goalTemplates: 14,
      filters: 'none'
    }
  ];

  const handleEdit = (category: any) => {
    setEditingCategory(category);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingCategory(null);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Goal Categories</h1>
        <Button 
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white text-sm flex items-center gap-2"
        >
          <span className="text-lg">+</span>
          Add Goal Category
        </Button>
      </div>

      {/* Search */}
      <div className="flex justify-end">
        <div className="relative w-80">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search categories..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Table */}
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900 w-16"></TableHead>
                <TableHead className="font-semibold text-gray-900 w-16"></TableHead>
                <TableHead className="font-semibold text-gray-900">Name</TableHead>
                <TableHead className="font-semibold text-gray-900">Goal Templates</TableHead>
                <TableHead className="font-semibold text-gray-900">Filters</TableHead>
                <TableHead className="font-semibold text-gray-900 w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCategories.map((category) => (
                <TableRow key={category.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell>
                    <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
                      <span className="text-gray-400">⊚</span>
                    </button>
                  </TableCell>
                  <TableCell className="font-medium">{category.order}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {category.image && (
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-12 h-12 rounded object-cover"
                        />
                      )}
                      <span className="text-blue-600 hover:underline cursor-pointer">
                        {category.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{category.goalTemplates}</TableCell>
                  <TableCell>{category.filters}</TableCell>
                  <TableCell>
                    <button 
                      onClick={() => handleEdit(category)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Edit className="w-4 h-4 text-gray-500" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <GoalCategoryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        category={editingCategory}
      />
    </div>
  );
};

export default GoalCategories;
