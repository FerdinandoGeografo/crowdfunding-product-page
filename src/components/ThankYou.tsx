import Button from "./Button";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

export default function ThankYou() {
  const { close } = useModal();
  return (
    <div className="flex max-w-135 flex-col items-center gap-6 px-6 pt-8 pb-10 sm:gap-8 sm:px-12 sm:pt-12 sm:pb-[48.5px]">
      <svg
        className="size-16 sm:size-22.5"
        viewBox="0 0 90 90"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle className="fill-primary-500" cx="45" cy="45" r="45" />
          <path
            className="stroke-white stroke-4"
            transform="translate(4 4) scale(1.3)"
            d="M20 31.86L28.093 40 44 24"
          />
        </g>
      </svg>

      <div className="mb-2 flex flex-col items-center gap-6 sm:mt-[15.5px] sm:mb-0 sm:gap-4">
        <Modal.Title>Thanks for your support!</Modal.Title>
        <p className="text-center text-sm leading-6 text-neutral-500 sm:text-[16px] sm:leading-7.5">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
      </div>

      <Button onClick={() => close()}>
        <span>Got it!</span>
      </Button>
    </div>
  );
}
