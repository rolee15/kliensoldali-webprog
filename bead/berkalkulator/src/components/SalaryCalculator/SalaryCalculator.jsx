import InputWithLabel from "./InputWithLabel";
import SliderModifier from "./SliderModifier";
import Summary from "./Summary";
import ToggleWithLabel from "./ToggleWithLabel";

const SalaryCalculator = ({ name }) => {
  return (
    <>
      <h1>{name} bérének kiszámítása</h1>
      <InputWithLabel
        id="name"
        labelName="Családtag neve"
        placeholderText={name}
        helpText="Add meg a családtag nevét!"
      />
      <InputWithLabel
        id="gross-salary"
        labelName="Bruttó bér"
        placeholderText="250.000 Ft"
        helpText="Add meg a bruttó béredet!"
      />
      <SliderModifier></SliderModifier>

      <div className="flex flex-col">
        <h2>Kedvezmények</h2>
        <ToggleWithLabel id="tax-credit-under-25" labelText="25 év alattiak SZJA mentessége" />
        <ToggleWithLabel id="tax-credit-newly-wed" labelText="Friss házasok kedvezménye" />
        <ToggleWithLabel id="tax-credit-disabilities" labelText="Személyi adókedvezmény" />
        <ToggleWithLabel id="tax-credit-children" labelText="Családi kedvezmény" />
      </div>

      <Summary></Summary>
    </>
  );
};

export default SalaryCalculator;
