"use client"

import { useState } from "react"
import { Check, Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select a date")
})

export default function PricingPlans() {
  const [annualBilling, setAnnualBilling] = useState(true)
  const [showDemoForm, setShowDemoForm] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: ""
    }
  })

  const handleSubmitDemo = (values: z.infer<typeof formSchema>) => {
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
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your educational institution
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <Card className="flex flex-col border-2 shadow-sm">
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl font-bold text-center">Basic Plan</CardTitle>
            <CardDescription className="text-center text-lg mt-2">Perfect for small institutions</CardDescription>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Contact for Pricing</p>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Student & Teacher Management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Fee Collection Tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Attendance Management</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Basic Reports</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full" size="lg">
              Contact Us
            </Button>
          </CardFooter>
        </Card>

        {/* Customized Plan */}
        <Card className="flex flex-col border-2 border-primary shadow-lg relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <Badge className="bg-primary text-primary-foreground px-3 py-1">
              <Star className="h-3.5 w-3.5 mr-1 inline" />
              MOST POPULAR
            </Badge>
          </div>
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl font-bold text-center">Customized Plan</CardTitle>
            <CardDescription className="text-center text-lg mt-2">Tailored for growing institutions</CardDescription>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium">Contact for Pricing</p>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">All Basic Plan Features</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Advanced Reports & Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Custom Branding</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>E-learning Integration</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>24/7 Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full" size="lg" variant="default">
              Contact Us
            </Button>
          </CardFooter>
        </Card>

       
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
        <Button size="lg" variant="default" onClick={() => setShowDemoForm(true)}>
          Schedule a Demo
        </Button>
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
