import { Switch } from "@/components/ui/switch";

const ToggleWithLabel = ({ id, labelText, checked, onChecked }) => {
  return (
    <div>
      <Switch id={id} checked={checked} onCheckedChange={onChecked} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export default ToggleWithLabel;
