import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
    <div className="flex flex-col place-content-center">

        <h1 className="mx-auto">Háztartás összesített jövedelme</h1>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Családtag</TableHead>
              <TableHead>Nettó bér</TableHead>
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
    </div>
  );
};

export default HouseholdSummary;
