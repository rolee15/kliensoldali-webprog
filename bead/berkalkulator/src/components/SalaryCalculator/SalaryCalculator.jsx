import { useDispatch, useSelector } from "react-redux";
import DeleteButton from "./DeleteButton";
import InputWithLabel from "./InputWithLabel";
import SliderModifier from "./SliderModifier";
import Summary from "./Summary";
import TaxCredits from "./TaxCredits";
import { Card } from "@/components/ui/card";
import { selectFamilyMember, selectFamilyMemberNames } from "@/state/selectors";
import { updateFamilyMember, updateFamilyMemberName } from "@/state/salaryCalculatorSlice";

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
            onChangeHandler={(e) => dispatch(updateFamilyMemberName({ name: e.target.value }))}
          />
          <InputWithLabel
            id="gross-salary"
            labelName="Bruttó bér"
            placeholderText="250.000 Ft"
            helpText="Add meg a bruttó béredet!"
            value={member.grossSalary}
            onChangeHandler={(e) => dispatch(updateFamilyMember({ ...member, grossSalary: e.target.value }))}
          />

          <SliderModifier />

          <TaxCredits />
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
