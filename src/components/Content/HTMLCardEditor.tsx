
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Eye, Code, Move, RotateCcw, Copy, Download, Info } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

const HTMLCardEditor: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState(`<div style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; text-align: center; color: white;">
  <h2>Hello World!</h2>
  <p>This is a sample HTML card. Try editing the code!</p>
  <button style="background: white; color: #667eea; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">Click me</button>
</div>`);
  
  const [previewHtml, setPreviewHtml] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [showInstructions, setShowInstructions] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ offsetX: number; offsetY: number }>({ offsetX: 0, offsetY: 0 });

  const exampleSnippets = [
    {
      name: "Gradient Card",
      code: `<div style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; text-align: center; color: white;">
  <h2>Gradient Card</h2>
  <p>Beautiful gradient background</p>
</div>`
    },
    {
      name: "Product Card",
      code: `<div style="border: 1px solid #ddd; border-radius: 8px; padding: 16px; max-width: 300px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="https://via.placeholder.com/250x150" alt="Product" style="width: 100%; border-radius: 4px; margin-bottom: 12px;">
  <h3 style="margin: 0 0 8px 0; color: #333;">Product Name</h3>
  <p style="color: #666; margin: 0 0 12px 0;">Short product description here</p>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 20px; font-weight: bold; color: #e74c3c;">$29.99</span>
    <button style="background: #3498db; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Add to Cart</button>
  </div>
</div>`
    },
    {
      name: "Profile Card",
      code: `<div style="background: white; border-radius: 12px; padding: 24px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); max-width: 280px;">
  <div style="width: 80px; height: 80px; border-radius: 50%; background: #3498db; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: bold;">JD</div>
  <h3 style="margin: 0 0 4px 0; color: #2c3e50;">John Doe</h3>
  <p style="color: #7f8c8d; margin: 0 0 16px 0;">Frontend Developer</p>
  <div style="display: flex; gap: 8px; justify-content: center;">
    <button style="background: #3498db; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px;">Follow</button>
    <button style="background: #ecf0f1; color: #2c3e50; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px;">Message</button>
  </div>
</div>`
    }
  ];

  // Initialize preview on component mount
  useEffect(() => {
    handlePreview();
  }, []);

  const handlePreview = () => {
    setPreviewHtml(htmlCode);
  };

  const handleReset = () => {
    setHtmlCode(exampleSnippets[0].code);
    setPreviewHtml(exampleSnippets[0].code);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(htmlCode);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'html-card.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadExample = (code: string) => {
    setHtmlCode(code);
    setPreviewHtml(code);
  };

  // Drag and Drop functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    setIsDragging(true);
    const rect = cardRef.current.getBoundingClientRect();
    dragRef.current = {
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top
    };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragRef.current.offsetX,
      y: e.clientY - dragRef.current.offsetY
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handlePreview();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      {/* Instructions */}
      {showInstructions && (
        <Alert className="border-blue-200 bg-blue-50">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <p className="font-medium">How to use the HTML Card Editor:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Edit HTML:</strong> Type your HTML code in the editor below</li>
                <li><strong>Preview:</strong> Click "Preview" or use Ctrl/Cmd + Enter to see your HTML rendered</li>
                <li><strong>Drag & Drop:</strong> Click and drag the card header to reposition the preview card</li>
                <li><strong>Examples:</strong> Try the example snippets to get started</li>
                <li><strong>Export:</strong> Copy code to clipboard or download as HTML file</li>
              </ul>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowInstructions(false)}
                className="mt-2"
              >
                Got it, hide instructions
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                HTML Editor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your HTML code here..."
                className="font-mono text-sm min-h-[300px] resize-none"
                aria-label="HTML code editor"
              />
              
              <div className="flex flex-wrap gap-2">
                <Button onClick={handlePreview} className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button variant="outline" onClick={handleReset} className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
                <Button variant="outline" onClick={handleCopyCode} className="flex items-center gap-2">
                  <Copy className="w-4 h-4" />
                  Copy Code
                </Button>
                <Button variant="outline" onClick={handleDownload} className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Example Snippets */}
          <Card>
            <CardHeader>
              <CardTitle>Example Snippets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {exampleSnippets.map((snippet, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded hover:bg-gray-50">
                    <span className="font-medium">{snippet.name}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => loadExample(snippet.code)}
                    >
                      Load
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Preview Section */}
        <div className="space-y-4">
          <div className="relative">
            <Card 
              ref={cardRef}
              className={`transition-shadow duration-200 ${isDragging ? 'shadow-lg cursor-grabbing' : 'cursor-grab'}`}
              style={{
                position: isDragging ? 'fixed' : 'relative',
                left: isDragging ? `${position.x}px` : 'auto',
                top: isDragging ? `${position.y}px` : 'auto',
                zIndex: isDragging ? 1000 : 'auto'
              }}
            >
              <CardHeader 
                className="cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                role="button"
                tabIndex={0}
                aria-label="Drag to move preview card"
              >
                <CardTitle className="flex items-center gap-2">
                  <Move className="w-5 h-5" />
                  Live Preview
                  <Badge variant="secondary" className="ml-auto">
                    Draggable
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="min-h-[200px] p-4 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50">
                  {previewHtml ? (
                    <div 
                      dangerouslySetInnerHTML={{ __html: previewHtml }}
                      className="w-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Click "Preview" to see your HTML rendered here
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Info */}
          <Card>
            <CardHeader>
              <CardTitle>Preview Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">HTML Length:</span>
                  <span className="font-mono">{htmlCode.length} characters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lines:</span>
                  <span className="font-mono">{htmlCode.split('\n').length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Drag Status:</span>
                  <Badge variant={isDragging ? "default" : "secondary"}>
                    {isDragging ? "Dragging" : "Static"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HTMLCardEditor;
