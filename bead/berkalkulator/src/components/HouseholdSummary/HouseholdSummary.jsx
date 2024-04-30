import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const salaries = [
  {
    name: "Bogdán",
    netSalary: "101.000 Ft",
  },
  {
    name: "Bendi",
    netSalary: "100.000 Ft",
  },
];

const HouseholdSummary = () => {
  return (
    <Card className="grid w-1/2 place-content-center">

        <h1 className="mx-auto p-4 text-xl font-semibold">Háztartás összesített jövedelme</h1>

        <Table className="w-96">
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2 font-bold text-inherit">Családtag</TableHead>
              <TableHead className="w-1/2 font-bold text-inherit">Nettó bér</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salaries.map((salary) => (
              <TableRow key={salary.name}>
                <TableCell className="font-medium">{salary.name}</TableCell>
                <TableCell>{salary.netSalary}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell>Összesen</TableCell>
              <TableCell>201.000 Ft</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
    </Card>
  );
};

export default HouseholdSummary;
