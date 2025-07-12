import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  Heart, 
  Share2, 
  MapPin, 
  Star, 
  Calendar,
  Package,
  Shield,
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const itemImages = [
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=600&fit=crop"
];

export default function ItemDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % itemImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + itemImages.length) % itemImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/browse" className="text-muted-foreground hover:text-primary text-sm">
            ← Back to Browse
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img 
                src={itemImages[currentImageIndex]} 
                alt="Item"
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {itemImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </>
              )}
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {itemImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {itemImages.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-primary' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div className="space-y-6">
            {/* Header Actions */}
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                Available
              </Badge>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Title and Basic Info */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Vintage Denim Jacket</h1>
              
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-accent border-accent">
                  150 Points
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-muted-foreground">(12 reviews)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Category:</span>
                  <span className="ml-2 font-medium">Jackets</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Size:</span>
                  <span className="ml-2 font-medium">Medium</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Condition:</span>
                  <span className="ml-2 font-medium">Good</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Brand:</span>
                  <span className="ml-2 font-medium">Levi's</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                A classic vintage Levi's denim jacket in great condition. This timeless piece features 
                the traditional button-up front, chest pockets, and that perfect worn-in look that only 
                comes with age. Perfect for layering and adding a casual edge to any outfit.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['vintage', 'denim', 'casual', 'layering'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Owner Info */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Listed by</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground">SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold">Sarah Martinez</h4>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>4.9 (28 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <div className="font-semibold">15</div>
                    <div className="text-muted-foreground">Items Listed</div>
                  </div>
                  <div>
                    <div className="font-semibold">32</div>
                    <div className="text-muted-foreground">Swaps</div>
                  </div>
                  <div>
                    <div className="font-semibold">2 years</div>
                    <div className="text-muted-foreground">Member</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Swap Request
                </Button>
                <Button variant="outline" size="lg">
                  <Package className="h-4 w-4 mr-2" />
                  Redeem (150 pts)
                </Button>
              </div>
              
              <Button variant="outline" className="w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Owner
              </Button>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-4 border-t">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Listed 3 days ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Verified item</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}