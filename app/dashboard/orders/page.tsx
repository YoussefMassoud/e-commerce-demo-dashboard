import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderPage() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent Orders From your store</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-medium"> youssef amir</p>
                <p className="text-muted-foreground md:flex hidden  text-xs">
                  {" "}
                  youssefamir@gmail.com
                </p>
              </TableCell>
              <TableCell>Sale</TableCell>
             
              <TableCell className="text-green-600">Successful</TableCell>
              <TableCell >10/12/2024</TableCell>
              <TableCell className="text-green-600 text-right">$500</TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
