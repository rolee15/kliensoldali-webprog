import { Button } from "@/components/ui/button";

const FamilyMemberTabs = () => {
  return (
    <div className="flex w-fit space-x-4">
      <div className="p-2 rounded-md bg-secondary text-secondary-foreground">
        <Button>Bendi</Button>
        <Button>Bogdán</Button>
      </div>
      <div className="p-2 rounded-md bg-secondary text-secondary-foreground">
        <Button>+</Button>
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
