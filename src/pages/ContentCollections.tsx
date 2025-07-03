
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Search, Plus, Eye, Edit3, Link as LinkIcon } from 'lucide-react';

const ContentCollections = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const collections = [
    {
      id: 1,
      name: "'Tis the Season",
      description: "Find comfort and joy this holiday season with holiday tips, articles, and recipes.",
      content: 13,
      taxonomies: "none",
      activities: "none",
      private: "Private",
      image: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 2,
      name: "Add fruit to cereal or yogurt",
      description: "Fruit is a fun way to mix up your cereal or yogurt, while also boosting your micronutrient intake. Berries, bananas, kiwi, or pomegranate are just a few tasty options.",
      content: 9,
      taxonomies: "none",
      activities: 1,
      private: "Private",
      image: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 3,
      name: "Add healthy fats to salads/sandwiches",
      description: "Sandwiches and salads are a great place to add in more healthy fats to your diet. Avocado, nuts, or seeds are all tasty options.",
      content: 10,
      taxonomies: "none",
      activities: 1,
      private: "Private",
      image: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 4,
      name: "Add no salt to my food",
      description: "Salt is found in a number of the foods we eat each day without even knowing it. High salt intake can increase blood pressure, increasing your risk of heart disease. The average person consumes above the daily recommended value of salt each day. Not adding salt to your food is one step to reduce the amount of salt you eat.",
      content: 10,
      taxonomies: "none",
      activities: 1,
      private: "Private",
      image: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 5,
      name: "Aerobics",
      description: "Aerobics uses rhythmic exercises, paired with flexibility and light strength training, to give you a fun cardiovascular workout. It can be done in a group setting, or alone.",
      content: 5,
      taxonomies: "none",
      activities: 1,
      private: "Private",
      image: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 6,
      name: "Alyson's Favorites",
      description: "A mom of two young girls and part of the TOVI product team.",
      content: 3,
      taxonomies: "none",
      activities: "none",
      private: "Private",
      image: "/lovable-uploads/placeholder-image.jpg"
    }
  ];

  const filteredCollections = collections.filter(collection =>
    collection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collection.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Content Collections</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Content Collection
        </Button>
      </div>

      {/* Search */}
      <Card className="border-gray-200">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <Input
              placeholder="Search collections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300"
            />
          </div>
        </CardContent>
      </Card>

      {/* Collections Table */}
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Name</th>
                  <th className="text-left p-4 font-medium text-gray-900">Description</th>
                  <th className="text-left p-4 font-medium text-gray-900">Content</th>
                  <th className="text-left p-4 font-medium text-gray-900">Taxonomies</th>
                  <th className="text-left p-4 font-medium text-gray-900">Activities</th>
                  <th className="text-left p-4 font-medium text-gray-900">Private</th>
                  <th className="text-left p-4 font-medium text-gray-900">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCollections.map((collection) => (
                  <tr key={collection.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                          <div className="w-8 h-8 bg-gray-100 rounded"></div>
                        </div>
                        <span className="font-medium text-blue-600">{collection.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-600 max-w-md">
                      <p className="truncate">{collection.description}</p>
                    </td>
                    <td className="p-4 text-center">{collection.content}</td>
                    <td className="p-4 text-gray-600">{collection.taxonomies}</td>
                    <td className="p-4 text-center">{collection.activities}</td>
                    <td className="p-4">
                      <Badge className="bg-gray-100 text-gray-800">
                        {collection.private}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <LinkIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentCollections;
