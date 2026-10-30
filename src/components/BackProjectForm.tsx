import { type SubmitEventHandler } from "react";
import { FREE_OPTION } from "../constants/product.const";

import PledgeFormOption from "./PledgeFormOption";
import ProductPledgeForm from "./PledgeAmountInput";

import useProduct from "../hooks/useProduct";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import usePledgeSelection from "../hooks/usePledgeSelection";

export default function BackProjectForm() {
  const {
    product: { pledgeOptions },
    dispatch,
  } = useProduct();
  const { open, close } = useModal();
  const { amount, setAmount, select, selectedId } = usePledgeSelection();

  const extendedOptions = [FREE_OPTION, ...pledgeOptions];

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

    close();
    open("thank-you");
  };

  return (
    <div className="max-w-182.5 px-6 py-8 sm:px-12 sm:py-[48.5px]">
      <Modal.Title className="mb-6 sm:mb-4">Back this project</Modal.Title>
      <p className="mb-6 text-sm leading-6 text-neutral-500 sm:mb-8 sm:text-[16px] sm:leading-7.5">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

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
