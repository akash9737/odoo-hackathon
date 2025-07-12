import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ItemCard } from "@/components/ui/item-card";
import { 
  User, 
  MapPin, 
  Star, 
  TrendingUp, 
  Package, 
  Repeat, 
  Clock,
  CheckCircle2,
  Plus,
  Edit
} from "lucide-react";

const userItems = [
  {
    id: "1",
    title: "Vintage Leather Jacket",
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
    title: "Summer Floral Dress",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop", 
    category: "Dresses",
    size: "S",
    condition: "Excellent",
    location: "San Francisco", 
    points: 120,
    rating: 4.9
  }
];

const swapHistory = [
  {
    id: "swap-1",
    item: "Designer Blazer",
    partner: "Sarah M.",
    partnerAvatar: "/placeholder.svg",
    date: "2024-01-15",
    status: "completed",
    points: 180
  },
  {
    id: "swap-2", 
    item: "Casual Jeans",
    partner: "Mike R.",
    partnerAvatar: "/placeholder.svg",
    date: "2024-01-10",
    status: "ongoing",
    points: 90
  },
  {
    id: "swap-3",
    item: "Wool Sweater", 
    partner: "Emma L.",
    partnerAvatar: "/placeholder.svg",
    date: "2024-01-05",
    status: "completed",
    points: 110
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="text-lg bg-primary text-primary-foreground">JD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Active Member
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8 rating</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Member since Jan 2024</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">
                  Passionate about sustainable fashion and discovering unique pieces. 
                  Love swapping items and meeting fellow fashion enthusiasts!
                </p>
              </div>
              
              <Button variant="outline" className="shrink-0">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points Balance</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">250</div>
              <p className="text-xs text-muted-foreground">
                +12 from last swap
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Items Listed</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                2 available for swap
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Successful Swaps</CardTitle>
              <Repeat className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">
                100% completion rate
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Community Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">
                Based on 12 reviews
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="items">My Items</TabsTrigger>
            <TabsTrigger value="swaps">Swap History</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          
          {/* My Items Tab */}
          <TabsContent value="items" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Your Items</h2>
                <p className="text-muted-foreground">Manage your listed items and track their performance</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add New Item
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {userItems.map((item) => (
                <ItemCard key={item.id} {...item} />
              ))}
              
              {/* Add Item Card */}
              <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors cursor-pointer group">
                <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <Plus className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Add New Item</h3>
                    <p className="text-sm text-muted-foreground">List items for swapping or points</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Swap History Tab */}
          <TabsContent value="swaps" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Swap History</h2>
              <p className="text-muted-foreground">Track your ongoing and completed swaps</p>
            </div>
            
            <div className="space-y-4">
              {swapHistory.map((swap) => (
                <Card key={swap.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={swap.partnerAvatar} />
                          <AvatarFallback>{swap.partner.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{swap.item}</span>
                            {swap.status === 'completed' ? (
                              <CheckCircle2 className="h-4 w-4 text-success" />
                            ) : (
                              <Clock className="h-4 w-4 text-warning" />
                            )}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>with {swap.partner}</span>
                            <span>{new Date(swap.date).toLocaleDateString()}</span>
                            <Badge variant={swap.status === 'completed' ? 'secondary' : 'outline'}>
                              {swap.points} points
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Badge variant={swap.status === 'completed' ? 'default' : 'secondary'}>
                        {swap.status === 'completed' ? 'Completed' : 'In Progress'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <p className="text-muted-foreground">Your latest interactions and updates</p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="h-12 w-12 rounded-full bg-muted mx-auto flex items-center justify-center">
                    <Clock className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">No Recent Activity</h3>
                    <p className="text-sm text-muted-foreground">
                      Start browsing items or list something new to see your activity here
                    </p>
                  </div>
                  <Button variant="outline">Browse Items</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}