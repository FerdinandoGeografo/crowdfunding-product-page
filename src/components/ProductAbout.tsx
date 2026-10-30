import useProduct from "../hooks/useProduct";
import Card from "./Card";
import RewardCard from "./RewardCard";

export default function ProductAbout() {
  const {
    product: { description, pledgeOptions },
  } = useProduct();

  return (
    <Card className="px-6 py-10 sm:p-12">
      <h2 className="text-lg leading-5.5 font-bold sm:text-xl sm:leading-6">
        About this project
      </h2>
      <div className="mt-6 mb-8.75 flex flex-col gap-6 sm:mt-8.75 sm:mb-10 sm:gap-7.5">
        {description.split("\n").map((text, i) => (
          <p
            className="text-sm leading-6 text-neutral-500 sm:text-[16px] sm:leading-7.5"
            key={i}
          >
            {text}
          </p>
        ))}
      </div>

      <ul className="flex flex-col gap-6">
        {pledgeOptions.map((option) => (
          <RewardCard option={option} key={option.id} />
        ))}
      </ul>
    </Card>
  );
}
