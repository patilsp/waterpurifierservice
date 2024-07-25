"use client";

import { useEffect, useState } from "react"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker"
import { Overview } from "@/app/dashboard/components/overview"
import { RecentSales } from "@/app/dashboard/components/recent-sales"
import { Search } from "@/app/dashboard/components/search"
import TeamSwitcher from "@/app/dashboard/components/team-switcher"

export default function DashboardPage() {
  const [complaintsData, setComplaintsData] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    assigned: 0,
  })

  useEffect(() => {
    fetch('/api/complaints')
      .then(response => response.json())
      .then(data => setComplaintsData(data))
      .catch(error => console.error('Error fetching complaints data:', error))
  }, [])

  return (
    <>
      <div className="border p-4">
        <div className="flex-col md:flex">
          <div className="mb-2 border-b">
            <div className="flex h-16 justify-start px-4">
              <div className="hidden md:block">
                <TeamSwitcher />
              </div>
              <div className="ml-auto flex justify-start space-x-4">
                <Search />
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              <div className="hidden items-center space-x-2 md:flex">
                <CalendarDateRangePicker />
                <Button>Download</Button>
              </div>
            </div>
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="hover:bg-gray-100 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Complaints</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{complaintsData.total}</div>
                      <p className="text-xs text-muted-foreground">Total complaints registered</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:bg-gray-100 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{complaintsData.completed}</div>
                      <p className="text-xs text-muted-foreground">Complaints resolved</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:bg-gray-100 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{complaintsData.pending}</div>
                      <p className="text-xs text-muted-foreground">Complaints awaiting action</p>
                    </CardContent>
                  </Card>
                  <Card className="hover:bg-gray-100 transition-colors duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Assigned</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{complaintsData.assigned}</div>
                      <p className="text-xs text-muted-foreground">Complaints assigned to staff</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <Overview />
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>You made 265 sales this month.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
