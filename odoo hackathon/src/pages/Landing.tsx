import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ItemCard } from "@/components/ui/item-card";
import { Header } from "@/components/layout/Header";
import { 
  Leaf, 
  Recycle, 
  Users, 
  ArrowRight, 
  Star,
  TrendingUp,
  Heart,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredItems = [
  {
    id: "1",
    title: "Vintage Denim Jacket",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Jackets",
    size: "M",
    condition: "Good",
    location: "San Francisco",
    points: 150,
    rating: 4.8
  },
  {
    id: "2", 
    title: "Designer Summer Dress",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
    category: "Dresses",
    size: "S",
    condition: "Excellent",
    location: "Los Angeles",
    points: 200,
    rating: 4.9
  },
  {
    id: "3",
    title: "Wool Winter Coat",
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
    category: "Coats",
    size: "L", 
    condition: "Very Good",
    location: "Seattle",
    points: 180,
    rating: 4.7
  },
  {
    id: "4",
    title: "Casual Cotton T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "T-Shirts",
    size: "M",
    condition: "Good",
    location: "Portland",
    points: 80,
    rating: 4.5
  }
];

const stats = [
  { icon: Users, label: "Active Members", value: "25,000+" },
  { icon: Recycle, label: "Items Swapped", value: "150,000+" },
  { icon: Leaf, label: "CO2 Saved", value: "500 tons" },
  { icon: TrendingUp, label: "Growth Rate", value: "40% monthly" }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Sustainable Fashion Platform
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Swap. Style.{" "}
                  <span className="text-primary">Sustain.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Join the community revolutionizing fashion through sustainable clothing exchanges. 
                  Give your wardrobe a second life while discovering amazing pieces from others.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/auth">
                    Start Swapping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/browse">Browse Items</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/add-item">List an Item</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">25,000+ members</div>
                    <div className="text-muted-foreground">swapping sustainably</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-muted-foreground text-sm">(2,500 reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-72 w-72 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 h-72 w-72 bg-accent/10 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop"
                alt="Sustainable fashion community"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16">
        <div className="container px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Featured Items</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover amazing pieces from our community. Each item is carefully curated 
                and ready for its next adventure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/browse">
                  View All Items
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">How ReWear Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, sustainable, and social. Join our community in 3 easy steps.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: Heart,
                  title: "List Your Items",
                  description: "Upload photos and details of clothing you're ready to swap or sell for points."
                },
                {
                  step: "02", 
                  icon: Users,
                  title: "Connect & Swap",
                  description: "Browse items from others, send swap requests, or use points to claim items directly."
                },
                {
                  step: "03",
                  icon: Shield,
                  title: "Safe Exchange",
                  description: "Complete secure exchanges with our verified community members and rating system."
                }
              ].map((step, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-md">
                  <CardContent className="space-y-4 p-0">
                    <div className="text-4xl font-bold text-primary/20">{step.step}</div>
                    <div className="flex justify-center">
                      <div className="p-3 rounded-full bg-primary text-primary-foreground">
                        <step.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Start Your Sustainable Fashion Journey?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of fashion-conscious individuals making a positive impact on the planet.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/auth">
                Join ReWear Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/browse">Explore Items</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}