import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { Card } from "@/components/ui/card";

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main className="flex flex-row">
        <Card className="w-1/2">
          <SalaryCalculator name="Bendi" />
        </Card>
        <Card className="w-1/2">
          <HouseholdSummary />
        </Card>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
