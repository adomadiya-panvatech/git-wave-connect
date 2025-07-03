
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, Plus, Link as LinkIcon, Eye, Edit3 } from 'lucide-react';

const ContentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const contentTypes = [
    { id: 'all', label: 'All', color: 'bg-gray-100 text-gray-800' },
    { id: 'article', label: 'Article', color: 'bg-green-100 text-green-800' },
    { id: 'video', label: 'Video', color: 'bg-blue-100 text-blue-800' },
    { id: 'tip', label: 'Tip', color: 'bg-purple-100 text-purple-800' },
    { id: 'tovi-article', label: 'TOVI Article', color: 'bg-orange-100 text-orange-800' },
    { id: 'html-card', label: 'HTML Card', color: 'bg-pink-100 text-pink-800' },
  ];

  const contentItems = [
    {
      id: 1,
      type: 'html',
      title: 'WD-40 Challenge Report Card - New Super Target!',
      status: 'Approved',
      updated: '2022/11/18',
      views: 0,
      from: ''
    },
    {
      id: 2,
      type: 'article',
      title: 'Kelley Marie 5-Day Healthy Reset Program Guide',
      status: 'Approved',
      updated: '2022/11/18',
      views: 0,
      from: 'drive.google.com'
    },
    {
      id: 3,
      type: 'article',
      title: '4 Simple Steps to Take to Boost Your Longevity Later in Life',
      status: 'Approved',
      updated: '2022/11/16',
      views: 0,
      from: 'www.verywellhealth.com'
    },
    {
      id: 4,
      type: 'tovi',
      title: 'Movement + Stress',
      status: 'Approved',
      updated: '2022/11/16',
      views: 0,
      from: ''
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Content Library</h1>
        <div className="flex gap-2">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Tip
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Content
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add TOVI Article
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add HTML Card
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="border-gray-200">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search articles, recipes, or videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Type:</span>
              {contentTypes.map((type) => (
                <Badge
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "secondary"}
                  className={`cursor-pointer ${
                    selectedType === type.id 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.label}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-700">Taxonomy descendants: Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-700">Taxonomy Operator: Or</span>
              </label>
            </div>

            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">Pending</Badge>
              <Badge className="bg-green-100 text-green-800">Approved</Badge>
              <Badge className="bg-green-100 text-green-800">Rejected</Badge>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-300">
                Search
              </Button>
              <Button variant="ghost" className="text-gray-600">
                Clear
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Table */}
      <Card className="border-gray-200">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                  <th className="text-left p-4 font-medium text-gray-900">Type</th>
                  <th className="text-left p-4 font-medium text-gray-900">Title</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900">Updated</th>
                  <th className="text-left p-4 font-medium text-gray-900">From</th>
                  <th className="text-left p-4 font-medium text-gray-900">Views</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredContent.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <LinkIcon className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className="bg-gray-100 text-gray-800">
                        {item.type.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="p-4 text-blue-600 font-medium">{item.title}</td>
                    <td className="p-4">
                      <Badge className="bg-green-100 text-green-800">
                        {item.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-600">{item.updated}</td>
                    <td className="p-4 text-blue-600">{item.from}</td>
                    <td className="p-4 text-gray-600">{item.views}</td>
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

export default ContentLibrary;
