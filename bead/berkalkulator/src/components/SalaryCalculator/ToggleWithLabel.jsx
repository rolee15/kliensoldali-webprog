import { Switch } from "@/components/ui/switch";

const ToggleWithLabel = ({ id, labelText, checked, onChecked }) => {
  return (
    <div className="flex my-1 space-x-2">
      <Switch id={id} checked={checked} onCheckedChange={onChecked} />
      <p htmlFor={id}>{labelText}</p>
    </div>
  );
};

export default ToggleWithLabel;
