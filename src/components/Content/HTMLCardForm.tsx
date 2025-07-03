
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent } from '../ui/card';
import { Heart, RefreshCw, Video, Image, FileText } from 'lucide-react';

interface HTMLCardFormProps {
  isOpen: boolean;
  onClose: () => void;
  card?: any;
}

const HTMLCardForm: React.FC<HTMLCardFormProps> = ({ isOpen, onClose, card }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: 'No link',
    template: 'flexible-card',
    mediaCarousel: {
      video: false,
      image: false,
      template: false
    },
    author: ''
  });

  useEffect(() => {
    if (card) {
      setFormData({
        name: card.name || '',
        type: card.type || 'No link',
        template: card.template || 'flexible-card',
        mediaCarousel: card.mediaCarousel || {
          video: false,
          image: false,
          template: false
        },
        author: card.author || ''
      });
    }
  }, [card]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('HTML Card form submitted:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle>{card ? 'Edit HTML Card' : 'New HTML Card'}</DialogTitle>
            <div className="flex gap-2">
              <Button className="bg-orange-500 text-white">
                HTML snippets
              </Button>
              <Button type="submit" className="bg-green-600 text-white">
                Save
              </Button>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mobile Preview */}
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-black rounded-3xl p-4">
              <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col items-center justify-center">
                <Button 
                  variant="outline" 
                  className="mb-8 flex items-center gap-2"
                  onClick={() => console.log('Refresh clicked')}
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </Button>
                <Heart className="w-8 h-8 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Card name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Type</Label>
              <div className="flex justify-between items-center">
                <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No link">No link</SelectItem>
                    <SelectItem value="External link">External link</SelectItem>
                    <SelectItem value="Internal link">Internal link</SelectItem>
                  </SelectContent>
                </Select>
                <span className="ml-4 text-gray-500">none</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Details</Label>
              
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <div className="flex justify-between items-center">
                  <Select value={formData.template} onValueChange={(value) => setFormData({ ...formData, template: value })}>
                    <SelectTrigger className="flex-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flexible-card">flexible-card</SelectItem>
                      <SelectItem value="basic-card">basic-card</SelectItem>
                      <SelectItem value="advanced-card">advanced-card</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm" className="ml-2">
                    ×
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Media carousel</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
                        <Video className="w-6 h-6 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-600">video</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
                        <Image className="w-6 h-6 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-600">image</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center bg-gray-100">
                        <div className="w-6 h-6 border border-gray-400 rounded flex items-center justify-center">
                          <span className="text-xs">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <div className="w-12 h-12 border border-gray-300 rounded flex items-center justify-center">
                      <FileText className="w-6 h-6 text-gray-400" />
                    </div>
                    <span className="text-sm text-gray-600">template</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Author name"
                />
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HTMLCardForm;
