import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";
import InputWithLabel from "./InputWithLabel";
import SliderModifier from "./SliderModifier";
import Summary from "./Summary";
import ToggleWithLabel from "./ToggleWithLabel";
import { Card } from "@/components/ui/card";
import { selectFamilyMember, selectFamilyMemberNames } from "@/state/selectors";
import { updateFamilyMember } from "@/state/salaryCalculatorSlice";

const SalaryCalculator = () => {
  const dispatch = useDispatch();
  const { name, member } = useSelector(selectFamilyMember);
  const { names } = useSelector(selectFamilyMemberNames);

  return (
    <Card className="flex flex-col w-1/2 place-content-center">
      <div className="flex justify-between">
        <div className="grid m-4 space-y-2">
          <h1 className="text-2xl font-bold uppercase">{name} bérének kiszámítása</h1>
          <InputWithLabel
            id="name"
            labelName="Családtag neve"
            placeholderText={name}
            helpText="Add meg a családtag nevét!"
            value={name}
          />
          <InputWithLabel
            id="gross-salary"
            labelName="Bruttó bér"
            placeholderText="250.000 Ft"
            helpText="Add meg a bruttó béredet!"
            value={member.grossSalary}
          />

          <SliderModifier></SliderModifier>

          <div className="grid pt-4">
            <h2 className="text-l font-bold uppercase">Kedvezmények</h2>
            <ToggleWithLabel id="tax-credit-under-25" labelText="25 év alattiak SZJA mentessége" />
            <ToggleWithLabel id="tax-credit-newly-wed" labelText="Friss házasok kedvezménye" />
            <ToggleWithLabel id="tax-credit-disabilities" labelText="Személyi adókedvezmény" />
            <ToggleWithLabel id="tax-credit-children" labelText="Családi kedvezmény" />
          </div>
        </div>

        {names.length === 0 ? (
          ""
        ) : (
          <div className="m-4">
            <DeleteButton></DeleteButton>
          </div>
        )}
      </div>

      <Summary></Summary>
    </Card>
  );
};

export default SalaryCalculator;
