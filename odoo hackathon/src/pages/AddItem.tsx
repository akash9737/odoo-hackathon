import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Upload, 
  X, 
  Plus,
  Image as ImageIcon,
  AlertCircle
} from "lucide-react";

interface FormData {
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  brand: string;
  color: string;
  tags: string[];
  swappable: boolean;
  pointsPrice: string;
  images: File[];
}

export default function AddItem() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
    type: "",
    size: "",
    condition: "",
    brand: "",
    color: "",
    tags: [],
    swappable: true,
    pointsPrice: "",
    images: []
  });
  
  const [currentTag, setCurrentTag] = useState("");
  const [dragOver, setDragOver] = useState(false);

  const categories = [
    "Tops", "Bottoms", "Dresses", "Outerwear", "Shoes", 
    "Accessories", "Bags", "Jewelry", "Activewear", "Formal"
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
  const conditions = ["New with tags", "Excellent", "Very Good", "Good", "Fair"];

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;
    
    const newImages = Array.from(files).slice(0, 5 - formData.images.length);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag("");
    }
  };

  const removeTag = (tag: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tag)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleImageUpload(e.dataTransfer.files);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">List a New Item</h1>
            <p className="text-muted-foreground">
              Share your pre-loved items with the ReWear community
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
                <CardDescription>
                  Upload up to 5 high-quality photos. The first photo will be your cover image.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragOver 
                      ? 'border-primary bg-primary/5' 
                      : 'border-muted-foreground/25 hover:border-muted-foreground/50'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                >
                  <div className="space-y-4">
                    <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Upload className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Drop your images here, or click to browse</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB each</p>
                    </div>
                    <Button type="button" variant="outline" onClick={() => document.getElementById('image-upload')?.click()}>
                      Choose Files
                    </Button>
                    <input
                      id="image-upload"
                      type="file"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e.target.files)}
                    />
                  </div>
                </div>

                {/* Image Previews */}
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Preview ${index + 1}`}
                          className="aspect-square w-full object-cover rounded-lg"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6 bg-black/50 hover:bg-black/70 text-white"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute bottom-2 left-2 text-xs">Cover</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Vintage Denim Jacket"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your item's condition, features, and styling details..."
                    className="min-h-[100px]"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="type">Type</Label>
                    <Input
                      id="type"
                      placeholder="e.g., Blazer, Jeans, Sneakers"
                      value={formData.type}
                      onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Size *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, size: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        {sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Condition *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map((condition) => (
                          <SelectItem key={condition} value={condition}>
                            {condition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      placeholder="e.g., Zara, H&M, Nike"
                      value={formData.brand}
                      onChange={(e) => setFormData(prev => ({ ...prev, brand: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="color">Color</Label>
                    <Input
                      id="color"
                      placeholder="e.g., Blue, Black, Multicolor"
                      value={formData.color}
                      onChange={(e) => setFormData(prev => ({ ...prev, color: e.target.value }))}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>
                  Add tags to help others find your item (e.g., vintage, casual, formal)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Add a tag"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" variant="outline" onClick={addTag}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        #{tag}
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-4 w-4 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                          onClick={() => removeTag(tag)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Exchange Options */}
            <Card>
              <CardHeader>
                <CardTitle>Exchange Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="swappable"
                    checked={formData.swappable}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, swappable: !!checked }))}
                  />
                  <Label htmlFor="swappable">Available for swapping</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="points">Points Price (optional)</Label>
                  <Input
                    id="points"
                    type="number"
                    placeholder="e.g., 150"
                    value={formData.pointsPrice}
                    onChange={(e) => setFormData(prev => ({ ...prev, pointsPrice: e.target.value }))}
                  />
                  <p className="text-xs text-muted-foreground">
                    Set a points price if you want users to be able to claim this item directly
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex space-x-4">
              <Button type="submit" className="flex-1">
                List Item
              </Button>
              <Button type="button" variant="outline">
                Save Draft
              </Button>
            </div>

            <div className="flex items-start space-x-2 p-4 bg-muted/50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">Review Guidelines:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Items must be in the condition described</li>
                  <li>• Photos should accurately represent the item</li>
                  <li>• No counterfeit or replica items allowed</li>
                  <li>• All listings are subject to community review</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}