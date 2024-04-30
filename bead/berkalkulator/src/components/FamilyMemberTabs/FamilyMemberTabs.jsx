import { Button } from "@/components/ui/button";

const FamilyMemberTabs = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex space-x-1 p-2 rounded-md">
        <Button>Bendi</Button>
        <Button>Bogdán</Button>
      </div>
      <div className="flex space-x-1 p-2 rounded-md">
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
