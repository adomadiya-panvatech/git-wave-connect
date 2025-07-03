
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Input } from '../components/ui/input';
import GoalTemplateForm from '../components/Content/GoalTemplateForm';
import { Search, Star, Eye, Copy, Trash2 } from 'lucide-react';

const GoalTemplates = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [activeTab, setActiveTab] = useState('available');

  const mockTemplates = [
    {
      id: 1,
      image: '/lovable-uploads/50965e3a-b9ef-4d7c-a90e-53cbd6a5a519.png',
      name: 'Ask someone how they are doing',
      activities: 0,
      taxonomies: 3,
      isPrivate: false
    },
    {
      id: 2,
      image: '/lovable-uploads/ff5af5ed-03b1-4a14-8fbc-397ea41a6aef.png',
      name: 'Bake',
      activities: 0,
      taxonomies: 3,
      isPrivate: false
    },
    {
      id: 3,
      image: '/lovable-uploads/7565766c-680c-4874-98d2-9ff6a0973755.png',
      name: 'Clean my dishes',
      activities: 0,
      taxonomies: 4,
      isPrivate: false
    },
    {
      id: 4,
      name: 'Connect on TOVI Community',
      activities: 0,
      taxonomies: 4,
      isPrivate: false
    },
    {
      id: 5,
      name: 'Cook at home',
      activities: 0,
      taxonomies: 4,
      isPrivate: false
    },
    {
      id: 6,
      name: 'CrossFit',
      activities: 0,
      taxonomies: 5,
      isPrivate: false
    },
    {
      id: 7,
      name: 'Cycle',
      activities: 0,
      taxonomies: 5,
      isPrivate: false
    }
  ];

  const handleEdit = (template: any) => {
    setEditingTemplate(template);
    setIsFormOpen(true);
  };

  const handleAdd = () => {
    setEditingTemplate(null);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Goal Templates</h1>
        <Button 
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white text-sm flex items-center gap-2"
        >
          <span className="text-lg">+</span>
          Add Goal Template
        </Button>
      </div>

      {/* Search */}
      <div className="flex justify-end">
        <div className="relative w-80">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search templates..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-white border-b">
          <TabsTrigger 
            value="available" 
            className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Available
          </TabsTrigger>
          <TabsTrigger 
            value="private"
            className="data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
          >
            Private
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="mt-6">
          <Card className="border-gray-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="font-semibold text-gray-900">Image</TableHead>
                    <TableHead className="font-semibold text-gray-900">
                      <div className="flex items-center gap-1">
                        Name
                        <span className="text-gray-400">▲</span>
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-gray-900">Activities</TableHead>
                    <TableHead className="font-semibold text-gray-900">Taxonomies</TableHead>
                    <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTemplates.map((template) => (
                    <TableRow key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <TableCell>
                        {template.image && (
                          <img 
                            src={template.image} 
                            alt={template.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          {template.name}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {template.activities}
                          <Search className="w-4 h-4 text-gray-400" />
                          <Star className="w-4 h-4 text-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell>{template.taxonomies}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleEdit(template)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Eye className="w-4 h-4 text-gray-500" />
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <span className="text-gray-500 font-mono">ID</span>
                          </button>
                          <button className="p-1 hover:bg-gray-100 rounded">
                            <Trash2 className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="private" className="mt-6">
          <Card className="border-gray-200">
            <CardContent className="p-12 text-center">
              <div className="text-gray-500">
                <p>No private templates found</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <GoalTemplateForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        template={editingTemplate}
        isEdit={!!editingTemplate}
      />
    </div>
  );
};

export default GoalTemplates;
