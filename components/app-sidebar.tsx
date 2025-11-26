"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
	DollarSign,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavAccounts } from "@/components/nav-accounts"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"


const data = {
  user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
  teams: [
		{
			name: "YNAP User",
			logo: Command,
			plan: "Free",
		}
  ],

	// this section can be used to create a "folder structure"
	navMain: [
		{
			title: "Budgets",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "General Spending",
					url: "#",
				},
				{
					title: "Long Term Accounts",
					url: "#",
				},
				{
					title: "2026 Plan",
					url: "#",
				},
			],
		},
		{
			title: "Goals",
			url: "#",
			icon: SquareTerminal,
			isActive: false,
			items: [
				{title: "Holiday Savings", url: "#"},
				{title: "Yearly Savings", url: "#"},
				{title: "Vacation to Switzerland", url: "#"},
			],
		},
		{
			title: "Accounts",
			url: "#",
			icon: SquareTerminal,
			isActive: false,
			items: [],
		},
	],
	accounts: [
		{
			name: "Checking Account",
			url: "#",
			icon: DollarSign, // fix 
		},
		{
			name: "Savings Account",
			url: "#",
			icon: DollarSign, // fix 
		},
		{
			name: "Capital One Account",
			url: "#",
			icon: DollarSign, // fix 
		},
		{
			name: "Fidelity Investments",
			url: "#",
			icon: DollarSign, // fix 
		},
		{
			name: "Vangard 401(k)",
			url: "#",
			icon: DollarSign, // fix 
		},
	]
}
// This is sample data.
/*
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",:
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}
*/

/* removed from NavMain: 

        <NavProjects projects={data.projects} />
 */
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
				<NavAccounts accounts={data.accounts} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
