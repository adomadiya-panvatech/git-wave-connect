
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import PlanTemplateForm from '../components/Content/PlanTemplateForm';
import { Trash2, Link as LinkIcon } from 'lucide-react';

const PlanTemplates = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);

  const mockTemplates = [
    { id: 1, name: 'Start Eating Healthier', activities: 4, taxonomies: 0 },
    { id: 2, name: 'A Peaceful Day', activities: 3, taxonomies: 4 },
    { id: 3, name: 'Beat the Blahs', activities: 3, taxonomies: 4 },
    { id: 4, name: 'Back to Basics', activities: 3, taxonomies: 5 },
    { id: 5, name: 'Bedtime Routine', activities: 3, taxonomies: 1 },
    { id: 6, name: 'Healthy and Active', activities: 2, taxonomies: 2 },
    { id: 7, name: 'Energized All Day', activities: 4, taxonomies: 4 },
    { id: 8, name: 'Connect With Others', activities: 1, taxonomies: 1 },
    { id: 9, name: 'Strengthen My Relationship', activities: 1, taxonomies: 0 },
    { id: 10, name: 'Own My Morning', activities: 3, taxonomies: 1 },
    { id: 11, name: 'Stay Organized', activities: 2, taxonomies: 1 },
    { id: 12, name: 'Boost Productivity', activities: 3, taxonomies: 0 },
    { id: 13, name: 'WFH Balance', activities: 4, taxonomies: 4 }
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
        <h1 className="text-3xl font-bold text-black">Plan Templates</h1>
        <Button 
          onClick={handleAdd}
          className="bg-green-600 hover:bg-green-700 text-white text-sm flex items-center gap-2"
        >
          <span className="text-lg">+</span>
          Add Plan Template
        </Button>
      </div>

      {/* Table */}
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900">Name</TableHead>
                <TableHead className="font-semibold text-gray-900">Activities</TableHead>
                <TableHead className="font-semibold text-gray-900">Taxonomies</TableHead>
                <TableHead className="font-semibold text-gray-900">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTemplates.map((template) => (
                <TableRow key={template.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell>
                    <span 
                      className="text-blue-600 hover:underline cursor-pointer"
                      onClick={() => handleEdit(template)}
                    >
                      {template.name}
                    </span>
                  </TableCell>
                  <TableCell>{template.activities}</TableCell>
                  <TableCell>{template.taxonomies}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <LinkIcon className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <PlanTemplateForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        template={editingTemplate}
      />
    </div>
  );
};

export default PlanTemplates;
