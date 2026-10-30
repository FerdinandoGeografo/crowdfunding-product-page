import { type SubmitEventHandler } from "react";
import { FREE_OPTION } from "../constants/product.const";

import PledgeFormOption from "./PledgeFormOption";
import ProductPledgeForm from "./PledgeAmountInput";

import { DialogDescription, DialogTitle } from "@/components/dialog";
import useProduct from "../hooks/useProduct";
import useModal from "../hooks/useModal";
import usePledgeSelection from "../hooks/usePledgeSelection";

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

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!selectedId) return;

    dispatch({
      type: "pledge",
      payload: {
        optionId: selectedId,
        amount,
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {extendedOptions.map((option) => (
          <PledgeFormOption
            option={option}
            key={option.id}
            selected={selectedId === option.id}
            onSelect={() => select(option)}
          >
            <ProductPledgeForm
              option={option}
              amount={amount}
              setAmount={setAmount}
            />
          </PledgeFormOption>
        ))}
      </form>
    </div>
  );
}
