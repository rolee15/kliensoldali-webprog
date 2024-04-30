import { Button } from "@/components/ui/button";
import { selectFamilyMember } from "@/state/selectors";
import { useSelector } from "react-redux";

const Summary = () => {
  const { member } = useSelector(selectFamilyMember);
  return (
    <div className="grid justify-items-center m-2 p-2 space-y-2">
      <p className="w-32 min-w-fit text-xl">Számított nettó bér:</p>
      <Button className="w-32 min-w-fit text-xl">{member.netSalary} Ft</Button>
    </div>
  );
};

export default Summary;
