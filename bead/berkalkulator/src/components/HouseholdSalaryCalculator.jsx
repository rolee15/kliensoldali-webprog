import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = () => {
  return (
    <div className="container mx-auto my-8">
      <header>
        <FamilyMemberTabs />
      </header>
      <main className="flex space-x-2">
        <SalaryCalculator name="Bendi" />
        <HouseholdSummary />
      </main>
    </div>
  );
};

export default HouseholdSalaryCalculator;
