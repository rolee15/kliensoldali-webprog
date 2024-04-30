import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const InputWithLabel = ({ id, labelName, placeholderText, helpText }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id}>{labelName}</Label>
      <Input type="text" id={id} placeholder={placeholderText} />
      <p id="input-helptext" className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        {helpText}
      </p>
    </div>
  );
};

export default InputWithLabel;
