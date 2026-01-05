import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Calculator, 
  Zap, 
  DollarSign, 
  Lightbulb, 
  Home,
  Gauge,
  Eye,
  RotateCcw,
  ArrowRight,
  Battery,
  Leaf
} from 'lucide-react';

interface ToolsProps {
  serviceType: string;
}

export function InteractiveTools({ serviceType }: ToolsProps) {
  const [amperage, setAmperage] = useState([100]);
  const [homeSize, setHomeSize] = useState('');
  const [roomCount, setRoomCount] = useState([3]);
  const [lightingType, setLightingType] = useState('');
  const [currentUsage, setCurrentUsage] = useState([2000]);
  const [calculatorResult, setCalculatorResult] = useState(null);

  const calculatePanelUpgrade = () => {
    const basePrice = 1500;
    const sizeMultiplier = parseInt(homeSize) / 1000;
    const amperageBonus = (amperage[0] - 100) * 10;
    const estimate = Math.round(basePrice + (sizeMultiplier * 500) + amperageBonus);
    setCalculatorResult({
      type: 'Panel Upgrade',
      estimate: estimate,
      breakdown: [
        { item: 'Base Installation', cost: basePrice },
        { item: 'Home Size Factor', cost: Math.round(sizeMultiplier * 500) },
        { item: 'Amperage Upgrade', cost: amperageBonus }
      ]
    });
  };

  const calculateLightingProject = () => {
    const basePerRoom = lightingType === 'led' ? 200 : lightingType === 'recessed' ? 300 : 150;
    const totalRooms = roomCount[0];
    const estimate = basePerRoom * totalRooms;
    setCalculatorResult({
      type: 'Lighting Project',
      estimate: estimate,
      breakdown: [
        { item: `${totalRooms} rooms @ $${basePerRoom}/room`, cost: estimate }
      ]
    });
  };

  const calculateEnergySavings = () => {
    const monthlyUsage = currentUsage[0];
    const ratePerKwh = 0.12; // BC Hydro average
    const currentMonthlyCost = monthlyUsage * ratePerKwh;
    const potentialSavings = currentMonthlyCost * 0.3; // 30% potential savings
    const annualSavings = potentialSavings * 12;
    
    setCalculatorResult({
      type: 'Energy Savings',
      estimate: Math.round(annualSavings),
      breakdown: [
        { item: 'Current Monthly Cost', cost: Math.round(currentMonthlyCost) },
        { item: 'Monthly Savings (30%)', cost: Math.round(potentialSavings) },
        { item: 'Annual Savings', cost: Math.round(annualSavings) }
      ]
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calculator className="h-5 w-5 mr-2 text-primary" />
            Interactive Service Tools
          </CardTitle>
          <CardDescription>
            Get instant estimates and visualize your electrical project
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="calculator">Cost Calculator</TabsTrigger>
              <TabsTrigger value="simulator">3D Simulator</TabsTrigger>
              <TabsTrigger value="analyzer">Energy Analyzer</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Project Details</h4>
                  
                  <div className="space-y-2">
                    <Label>Home Size (sq ft)</Label>
                    <Input
                      value={homeSize}
                      onChange={(e) => setHomeSize(e.target.value)}
                      placeholder="e.g., 2000"
                      type="number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Panel Amperage</Label>
                    <div className="px-3">
                      <Slider
                        value={amperage}
                        onValueChange={setAmperage}
                        max={400}
                        min={100}
                        step={50}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>100A</span>
                        <span>{amperage[0]}A</span>
                        <span>400A</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Number of Rooms</Label>
                    <div className="px-3">
                      <Slider
                        value={roomCount}
                        onValueChange={setRoomCount}
                        max={15}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-1">
                        <span>1</span>
                        <span>{roomCount[0]} rooms</span>
                        <span>15</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Lighting Type</Label>
                    <Select value={lightingType} onValueChange={setLightingType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select lighting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="led">LED Conversion</SelectItem>
                        <SelectItem value="recessed">Recessed Lighting</SelectItem>
                        <SelectItem value="pendant">Pendant Lights</SelectItem>
                        <SelectItem value="track">Track Lighting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Button onClick={calculatePanelUpgrade} variant="outline">
                      <Gauge className="h-4 w-4 mr-2" />
                      Panel Cost
                    </Button>
                    <Button onClick={calculateLightingProject} variant="outline">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Lighting Cost
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {calculatorResult ? (
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3">
                        {calculatorResult.type} Estimate
                      </h4>
                      <div className="space-y-2">
                        {calculatorResult.breakdown.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span>{item.item}</span>
                            <span>${item.cost}</span>
                          </div>
                        ))}
                        <div className="border-t pt-2 mt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Total Estimate</span>
                            <span className="text-primary">${calculatorResult.estimate}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full mt-4" size="sm">
                        Get Detailed Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="bg-muted/30 rounded-lg p-8 text-center">
                      <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Enter your project details and click a calculate button to see instant estimates
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="simulator" className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md mx-auto">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-primary/10 rounded-full p-4">
                        <Home className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">3D Home Visualizer</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive 3D model showing electrical layouts and installations
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <RotateCcw className="h-4 w-4 mr-1" />
                        Rotate
                      </Button>
                      <Button size="sm" variant="outline">
                        <Zap className="h-4 w-4 mr-1" />
                        Wire
                      </Button>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Interactive Demo Available
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Click and drag to explore electrical layouts in 3D
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analyzer" className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Monthly Energy Usage (kWh)</Label>
                  <div className="px-3">
                    <Slider
                      value={currentUsage}
                      onValueChange={setCurrentUsage}
                      max={5000}
                      min={500}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>500 kWh</span>
                      <span>{currentUsage[0]} kWh</span>
                      <span>5000 kWh</span>
                    </div>
                  </div>
                </div>

                <Button onClick={calculateEnergySavings} className="w-full">
                  <Leaf className="h-4 w-4 mr-2" />
                  Calculate Energy Savings
                </Button>

                {calculatorResult && calculatorResult.type === 'Energy Savings' && (
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                      Potential Energy Savings
                    </h4>
                    <div className="space-y-2">
                      {calculatorResult.breakdown.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.item}</span>
                          <span>${item.cost}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/40 rounded-lg">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">Annual Savings Potential</span>
                        <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                          ${calculatorResult.estimate}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}