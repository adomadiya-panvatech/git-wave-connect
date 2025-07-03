
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Search, Upload, Play, Eye, Trash2 } from 'lucide-react';

const MediaLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mediaItems = [
    {
      id: 1,
      name: "Fun page_1 word my German wife",
      type: "video",
      modified: "Jul 8, 2022, 10:15:02 PM",
      thumbnail: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 2,
      name: "Fun page intro_Sara Bergmark",
      type: "video",
      modified: "May 26, 2022, 11:25:11 PM",
      thumbnail: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 3,
      name: "Fun page_It's a hard knock life",
      type: "video",
      modified: "May 18, 2022, 4:42:02 AM",
      thumbnail: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 4,
      name: "Fun page_My brain at work",
      type: "video",
      modified: "May 13, 2022, 9:28:02 AM",
      thumbnail: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 5,
      name: "Fun page_If you don't want to",
      type: "video",
      modified: "May 12, 2022, 3:27:02 AM",
      thumbnail: "/lovable-uploads/placeholder-image.jpg"
    },
    {
      id: 6,
      name: "Fun page_cute dog",
      type: "video",
      modified: "May 10, 2022, 5:23:02 AM",
      thumbnail: "/lovable-uploads/placeholder-image.jpg"
    }
  ];

  const filteredMedia = mediaItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Media Library</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Upload className="w-4 h-4 mr-2" />
          Upload video
        </Button>
      </div>

      {/* Media Type Tabs */}
      <Tabs defaultValue="videos" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md bg-gray-100">
          <TabsTrigger 
            value="videos" 
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Videos
          </TabsTrigger>
          <TabsTrigger 
            value="audio" 
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Audio
          </TabsTrigger>
          <TabsTrigger 
            value="images" 
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Images
          </TabsTrigger>
        </TabsList>

        {/* Search */}
        <Card className="border-gray-200">
          <CardContent className="p-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search name, tags"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>
          </CardContent>
        </Card>

        <TabsContent value="videos" className="space-y-4">
          {/* Video Table */}
          <Card className="border-gray-200">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200 bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-medium text-gray-900">Name</th>
                      <th className="text-left p-4 font-medium text-gray-900">Modified</th>
                      <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredMedia.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                              <Play className="w-6 h-6 text-white bg-green-600 rounded-full p-1" />
                            </div>
                            <span className="font-medium text-blue-600">{item.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-gray-600">{item.modified}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="h-8 px-3 text-blue-600">
                              ID
                            </Button>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                              <Trash2 className="w-4 h-4 text-red-600" />
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
        </TabsContent>

        <TabsContent value="audio" className="space-y-4">
          <Card className="border-gray-200">
            <CardContent className="p-12 text-center">
              <div className="text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No audio files</h3>
                <p className="text-gray-500">Upload your first audio file to get started</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <Card className="border-gray-200">
            <CardContent className="p-12 text-center">
              <div className="text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No images</h3>
                <p className="text-gray-500">Upload your first image to get started</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MediaLibrary;
