import { ReactNode } from "react";
import DashboardNav from "../components/daashboard/dashboradNav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col max-w-7xl px-4 max-auto sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 border-b border-gray-500 items-center justify-between gap-4 bg-white">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNav />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden " variant="outline">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
                <DashboardNav />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}
