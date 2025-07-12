import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, User, ShoppingBag, Plus, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-primary">ReWear</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link 
              to="/browse" 
              className={`transition-colors hover:text-primary ${isActive('/browse') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Browse Items
            </Link>
            <Link 
              to="/dashboard" 
              className={`transition-colors hover:text-primary ${isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/add-item" 
              className={`transition-colors hover:text-primary ${isActive('/add-item') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              List Item
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              250 Points
            </Badge>
          </div>
          
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-4 w-4" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
          
          <Button size="sm" className="hidden md:flex">
            <Plus className="h-4 w-4 mr-2" />
            List Item
          </Button>
        </div>
      </div>
    </header>
  );
};