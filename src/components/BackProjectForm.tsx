import { useState, type SubmitEventHandler } from "react";
import { FREE_OPTION } from "../constants/product.const";

import PledgeFormOption from "./PledgeFormOption";

import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup } from "@/components/ui/radio-group";
import useProduct from "../hooks/useProduct";
import useModal from "../hooks/useModal";
import { isValidPledge } from "../utils/pledge";

export default function BackProjectForm() {
  const {
    product: { pledgeOptions },
    dispatch,
  } = useProduct();
  const { selectedOptionId, openThankYou } = useModal();

  const extendedOptions = [FREE_OPTION, ...pledgeOptions];
  const [selectedId, setSelectedId] = useState(selectedOptionId);
  const selectedOption = extendedOptions.find(
    (option) => option.id === selectedId,
  );

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!selectedOption) return;
    const pledgeAmount =
      selectedOption.kind === "paid"
        ? Number(new FormData(e.currentTarget).get("amount"))
        : 0;
    if (!isValidPledge(selectedOption, pledgeAmount)) return;

    dispatch({
      type: "pledge",
      payload: {
        optionId: selectedOption.id,
        amount: pledgeAmount,
      },
    });

    openThankYou();
  };

  return (
    <div className="max-w-182.5 px-6 py-8 sm:px-12 sm:py-12">
      <DialogTitle className="mb-6 sm:mb-4">Back this project</DialogTitle>
      <DialogDescription className="mb-6 sm:mb-8">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </DialogDescription>

      <form onSubmit={handleSubmit}>
        <RadioGroup
          aria-label="Pledge options"
          value={selectedId}
          onValueChange={setSelectedId}
          className="gap-6"
        >
          {extendedOptions.map((option) => (
            <PledgeFormOption
              option={option}
              key={option.id}
              selected={selectedId === option.id}
            />
          ))}
        </RadioGroup>
      </form>
    </div>
  );
}
