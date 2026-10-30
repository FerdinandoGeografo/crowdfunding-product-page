import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Toggle } from "@/components/toggle";
import useModal from "../hooks/useModal";
import useProduct from "../hooks/useProduct";

export default function ProductHeader() {
  const {
    product: { title, subTitle, bookmarked, image },
    dispatch,
  } = useProduct();

  const { openBackProject } = useModal();

  return (
    <Card className="relative flex flex-col gap-5.5 px-6 pt-13 pb-10 sm:gap-10 sm:px-12 sm:pt-14 sm:pb-12">
      <img
        className="absolute top-0 left-1/2 size-14 -translate-1/2"
        src={image}
        alt={`${title}'s logo image`}
      />
      <div className="flex flex-col items-center gap-4 text-center sm:gap-3.75">
        <h1 className="text-xl leading-6 font-bold text-balance sm:text-[28px] sm:leading-8.5">
          {title}
        </h1>
        <p className="text-sm leading-6 text-neutral-500 sm:text-[16px] sm:leading-5">
          {subTitle}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2.25">
        <Button
          size="large"
          className="flex-1 sm:flex-none"
          onClick={(e) => openBackProject(e.currentTarget)}
        >
          <span>Back this project</span>
        </Button>

        <Toggle
          aria-label="Bookmark"
          pressed={bookmarked}
          onPressedChange={() => dispatch({ type: "toggleBookmark" })}
          className="gap-4 sm:pr-6"
        >
          <svg
            aria-hidden="true"
            width="56"
            height="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <circle
                className="group-aria-pressed/toggle:fill-primary-800 group-aria-pressed/toggle:group-hover/toggle:fill-primary-500 fill-neutral-900 transition-all duration-300 group-hover/toggle:fill-neutral-700"
                cx="28"
                cy="28"
                r="28"
              />
              <path
                className="fill-neutral-300 transition-colors duration-300 group-aria-pressed/toggle:fill-white"
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </svg>
          <span className="hidden sm:block">
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </Toggle>
      </div>
    </Card>
  );
}
