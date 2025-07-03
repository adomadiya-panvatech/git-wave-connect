
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import ChallengeForm from '../components/Content/ChallengeForm';

const Challenges = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState(null);

  const mockChallenges = [];

  const handleAdd = () => {
    setEditingChallenge(null);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Challenges</h1>
        <Button 
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          Add Challenge
        </Button>
      </div>

      {/* Table */}
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="font-semibold text-gray-900">Name</TableHead>
                <TableHead className="font-semibold text-gray-900">Start</TableHead>
                <TableHead className="font-semibold text-gray-900">
                  <div className="flex items-center gap-1">
                    End
                    <span className="text-gray-400">▼</span>
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-900"># of participants</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockChallenges.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-12 text-gray-500">
                    No challenges found. Click "Add Challenge" to create your first challenge.
                  </TableCell>
                </TableRow>
              ) : (
                mockChallenges.map((challenge: any) => (
                  <TableRow key={challenge.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell>{challenge.name}</TableCell>
                    <TableCell>{challenge.start}</TableCell>
                    <TableCell>{challenge.end}</TableCell>
                    <TableCell>{challenge.participants}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ChallengeForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        challenge={editingChallenge}
      />
    </div>
  );
};

export default Challenges;
