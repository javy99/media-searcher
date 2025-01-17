import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";

const App: React.FC  = () => {
  return (
    <div className="p-4">
      <div className="flex gap-2 items-center">
        <Label htmlFor="search">Search</Label>
        <Input id="search" type="search" placeholder="Search here..." />
      </div>
      <Button className="mt-4">Search</Button>
    </div>
  );
}

export default App;