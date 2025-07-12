import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Leaf, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Auth() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    password: "", 
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login:", loginData);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup:", signupData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to ReWear
            </Button>
          </Link>
          
          <div className="flex items-center justify-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-primary">ReWear</span>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Welcome to ReWear</h1>
            <p className="text-muted-foreground">
              Join our sustainable fashion community
            </p>
          </div>
        </div>

        {/* Auth Forms */}
        <Card>
          <Tabs defaultValue="login" className="w-full">
            <CardHeader className="pb-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Login Tab */}
              <TabsContent value="login" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <CardTitle className="text-xl">Sign in to your account</CardTitle>
                  <CardDescription>
                    Continue your sustainable fashion journey
                  </CardDescription>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <Button variant="link" className="p-0 h-auto text-sm">
                      Forgot password?
                    </Button>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              {/* Signup Tab */}
              <TabsContent value="signup" className="space-y-4 mt-0">
                <div className="space-y-2">
                  <CardTitle className="text-xl">Create your account</CardTitle>
                  <CardDescription>
                    Start swapping sustainably today
                  </CardDescription>
                </div>
                
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={signupData.lastName}
                        onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={signupData.agreeToTerms}
                      onCheckedChange={(checked) => setSignupData({ ...signupData, agreeToTerms: !!checked })}
                      required
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{" "}
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button variant="link" className="p-0 h-auto text-sm">
                        Privacy Policy
                      </Button>
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
        
        <div className="text-center text-sm text-muted-foreground">
          By continuing, you're joining a community committed to sustainable fashion 
          and environmental responsibility.
        </div>
      </div>
    </div>
  );
}