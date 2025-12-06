import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "@/components/app-sidebar"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { ChartRadarLegend } from "@/components/chart-radar-legend"
import { ChartBarLabelCustom } from "@/components/chart-bar-label-custom"
import { CustomCardComponent } from "@/components/matt-card"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Home() {
  return(<>
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3 grid-rows-[auto_1fr]">
              <div className="bg-muted/50 aspect-video rounded-xl">
                <ChartBarLabelCustom/>
              </div>
              <div className="bg-muted/50 aspect-video rounded-xl">
                <ChartRadarLegend/>
              </div>
              <div className="bg-muted/50 aspect-video rounded-xl">
                <CustomCardComponent/>
              </div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
              <ChartAreaInteractive/>
            </div>
          </div>
      </SidebarInset>
    </SidebarProvider>
  </>);
}
