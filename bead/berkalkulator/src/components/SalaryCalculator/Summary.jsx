import { Button } from "@/components/ui/button";

const Summary = () => {
  return (
    <div className="grid justify-items-center m-2 p-2 space-y-2">
      <p className="w-32 min-w-fit text-xl">Számított nettó bér:</p>
      <Button className="w-32 min-w-fit text-xl">100.000 Ft</Button>
    </div>
  );
};

export default Summary;
