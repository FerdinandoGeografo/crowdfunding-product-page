import type { SubmitEventHandler } from "react";
import { FREE_OPTION } from "../constants/product.const";

import PledgeFormOption from "./PledgeFormOption";
import PledgeAmountInput from "./PledgeAmountInput";

import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup } from "@/components/ui/radio-group";
import useProduct from "../hooks/useProduct";
import useModal from "../hooks/useModal";
import usePledgeSelection from "../hooks/usePledgeSelection";
import { isValidPledge } from "../utils/pledge";

export default function BackProjectForm() {
  const {
    product: { pledgeOptions },
    dispatch,
  } = useProduct();
  const { selectedOptionId, openThankYou } = useModal();

  const extendedOptions = [FREE_OPTION, ...pledgeOptions];
  const initialOption = extendedOptions.find(
    (option) => option.id === selectedOptionId,
  );
  const { amount, setAmount, select, selectedId } =
    usePledgeSelection(initialOption);
  const selectedOption = extendedOptions.find(
    (option) => option.id === selectedId,
  );

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!selectedOption) return;
    const pledgeAmount = selectedOption.kind === "paid" ? Number(amount) : 0;
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
    <div className="max-w-182.5 px-6 py-8 sm:px-12 sm:py-[48.5px]">
      <DialogTitle className="mb-6 sm:mb-4">Back this project</DialogTitle>
      <DialogDescription className="mb-6 sm:mb-8">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </DialogDescription>

      <form onSubmit={handleSubmit}>
        <RadioGroup
          aria-label="Pledge options"
          value={selectedId}
          onValueChange={(value) => {
            const option = extendedOptions.find((item) => item.id === value);
            if (option) select(option);
          }}
          className="gap-6"
        >
          {extendedOptions.map((option) => (
            <PledgeFormOption
              option={option}
              key={option.id}
              selected={selectedId === option.id}
            >
              <PledgeAmountInput
                option={option}
                amount={amount}
                onAmountChange={setAmount}
              />
            </PledgeFormOption>
          ))}
        </RadioGroup>
      </form>
    </div>
  );
}
