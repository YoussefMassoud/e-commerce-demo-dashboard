import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Archive, DollarSign, ShoppingBag } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4   ">
        {/* start Total Revenue card */}
        <Card>
          <CardHeader className="flex items-center justify-between flex-row pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold"> $100.000</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Chargers
            </p>
          </CardContent>
        </Card>
        {/* End Total Revenue card */}
        {/* start Total Sales card */}
        <Card>
          <CardHeader className="flex items-center justify-between flex-row pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="w-4 h-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold"> +10</p>
            <p className="text-xs text-muted-foreground">
              Total Sales on YoussefStore
            </p>
          </CardContent>
        </Card>
        {/* End Total Sales card */}
        {/* start Total Products card */}
        <Card>
          <CardHeader className="flex items-center justify-between flex-row pb-2">
            <CardTitle>Total Products</CardTitle>
            <Archive className="w-4 h-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold"> 55</p>
            <p className="text-xs text-muted-foreground">
              Total Products on YoussefStore
            </p>
          </CardContent>
        </Card>
        {/* End Total Products card */}
      </div>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>
              Recent Transaction from your store
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-8  ">
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium"> Youssef amir</p>
                <p className="text-xs text-muted-foreground"> Test@Test.com</p>
              </div>
              <p className="text-green-500 ml-auto font-medium ">+$1,999.00</p>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium"> Youssef amir</p>
                <p className="text-xs text-muted-foreground"> Test@Test.com</p>
              </div>
              <p className="text-green-500 ml-auto font-medium ">+$1,999.00</p>
            </div>   <div className="flex items-center gap-4">
              <Avatar className="hidden sm:flex h-9 w-9">
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium"> Youssef amir</p>
                <p className="text-xs text-muted-foreground"> Test@Test.com</p>
              </div>
              <p className="text-green-500 ml-auto font-medium ">+$1,999.00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
