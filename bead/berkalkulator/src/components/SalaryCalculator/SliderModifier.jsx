import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const SliderModifier = () => {
  return (
    <div className="grid items-center space-y-2">
      <Slider defaultValue={[500000000]} min={0} max={999999999}></Slider>
      <div className="flex flex-wrap justify-center gap-3">
        <Button>-5%</Button>
        <Button>-1%</Button>
        <Button>+1%</Button>
        <Button>+5%</Button>
      </div>
    </div>
  );
};

export default SliderModifier;
