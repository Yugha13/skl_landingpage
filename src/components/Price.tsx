"use client"

import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"

export default function PricingPlans() {
  const [showDemoForm, setShowDemoForm] = useState(false)

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: ""
    }
  })

  const handleSubmitDemo = (values: {
    name: string;
    email: string;
    phone: string;
    date: string;
  }) => {
    // Basic validation
    if (values.name.length < 2) {
      form.setError("name", { message: "Name must be at least 2 characters" })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      form.setError("email", { message: "Please enter a valid email" })
      return
    }
    if (values.phone.length < 10) {
      form.setError("phone", { message: "Please enter a valid phone number" })
      return
    }
    if (!values.date) {
      form.setError("date", { message: "Please select a date" })
      return
    }

    console.log(values)
    toast({
      title: "Demo Scheduled!",
      description: "We'll contact you soon to confirm the details.",
    })
    setShowDemoForm(false)
    form.reset()
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Comprehensive School Management Solution</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your institution with our complete management solution
        </p>
      </div>

      <div className="flex justify-center">
        <Card className="flex flex-col border-2 border-primary shadow-lg relative max-w-xl w-full">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground px-3 py-1">
              <Star className="h-3.5 w-3.5 mr-1 inline" />
              BEST VALUE
            </Badge>
          </div>
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl font-bold text-center">All-In-One School Solution</CardTitle>
            <CardDescription className="text-center text-lg mt-2">Everything you need to manage your institution</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">Complete Student & Teacher Management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Smart Fee Collection & Tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Advanced Attendance Management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Comprehensive Reports & Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Custom Branding Options</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>E-learning Platform Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 Priority Support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Free Setup & Training</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full" size="lg" variant="default" onClick={() => setShowDemoForm(true)}>
              Schedule a Free Demo
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Dialog open={showDemoForm} onOpenChange={setShowDemoForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Schedule a Demo</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you to schedule a demo.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmitDemo)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Contact Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
