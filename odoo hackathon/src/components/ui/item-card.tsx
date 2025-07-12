import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface ItemCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  size: string;
  condition: string;
  location: string;
  points?: number;
  swappable?: boolean;
  rating?: number;
}

export const ItemCard = ({ 
  id, 
  title, 
  image, 
  category, 
  size, 
  condition, 
  location, 
  points, 
  swappable = true,
  rating 
}: ItemCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 h-8 w-8 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge 
          variant="secondary" 
          className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm"
        >
          {condition}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {rating && (
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{rating}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium text-primary">{category}</span>
            <span>Size {size}</span>
          </div>
          
          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 space-y-2">
        {points && (
          <div className="w-full text-center">
            <Badge variant="outline" className="text-accent border-accent">
              {points} Points
            </Badge>
          </div>
        )}
        
        <div className="flex w-full space-x-2">
          {swappable && (
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link to={`/item/${id}`}>
                View Details
              </Link>
            </Button>
          )}
          <Button size="sm" className="flex-1" asChild>
            <Link to={`/item/${id}`}>
              {swappable ? "Swap Request" : "Redeem"}
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};