import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDateRangePicker } from "@/app/page/components/date-range-picker";
import { MainNav } from "@/app/page/components/main-nav";
import { Overview } from "@/app/page/components/overview";
import { RecentSales } from "@/app/page/components/recent-sales";
import { Search } from "@/app/page/components/search";
import TeamSwitcher from "@/app/page/components/team-switcher";
import { UserNav } from "@/app/page/components/user-nav";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example page app built using the components.",
};

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <ThemeModeToggle />
              <UserNav />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
