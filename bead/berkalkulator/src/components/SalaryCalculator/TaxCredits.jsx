import ToggleWithLabel from "@/components/SalaryCalculator/ToggleWithLabel";
import { updateFamilyMember } from "@/state/salaryCalculatorSlice";
import { selectFamilyMember } from "@/state/selectors";
import { useDispatch, useSelector } from "react-redux";

const TaxCredits = () => {
  const dispatch = useDispatch();
  const { member } = useSelector(selectFamilyMember);
  const { under25, newlyWed, disability, children, childrenEligible } = member.taxCredits;

  return (
    <div className="grid pt-4">
      <h2 className="text-l font-bold uppercase">Kedvezmények</h2>
      <ToggleWithLabel
        id="tax-credit-under-25"
        labelText="25 év alattiak SZJA mentessége"
        checked={under25}
        onChecked={(value) =>
          dispatch(updateFamilyMember({ ...member, taxCredits: { ...member.taxCredits, under25: value } }))
        }
      />
      <ToggleWithLabel
        id="tax-credit-newly-wed"
        labelText="Friss házasok kedvezménye"
        checked={newlyWed}
        onChecked={(value) =>
          dispatch(updateFamilyMember({ ...member, taxCredits: { ...member.taxCredits, newlyWed: value } }))
        }
      />
      <ToggleWithLabel
        id="tax-credit-disabilities"
        labelText="Személyi adókedvezmény"
        checked={disability}
        onChecked={(value) =>
          dispatch(updateFamilyMember({ ...member, taxCredits: { ...member.taxCredits, disability: value } }))
        }
      />
      <ToggleWithLabel
        id="tax-credit-children"
        labelText="Családi kedvezmény"
        checked={childrenEligible > 0}
        onChecked={(value) =>
          dispatch(updateFamilyMember({ ...member, taxCredits: { ...member.taxCredits, childrenEligible: value } }))
        }
      />
    </div>
  );
};

export default TaxCredits;
