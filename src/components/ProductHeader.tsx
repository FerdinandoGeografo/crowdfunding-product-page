import { Button } from "@/components/button";
import { Card } from "@/components/card";
import useModal from "../hooks/useModal";
import useProduct from "../hooks/useProduct";

export default function ProductHeader() {
  const {
    product: { title, subTitle, bookmarked, image },
    dispatch,
  } = useProduct();

  const { open } = useModal();

  return (
    <Card className="relative flex flex-col gap-10 px-6 pt-13 pb-10 sm:px-12 sm:pt-14 sm:pb-12">
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
      <div className="flex items-center justify-center gap-4.25 sm:justify-between">
        <Button size="large" onClick={() => open("back-project")}>
          <span>Back this project</span>
        </Button>

        <Button
          variant="secondary"
          size="large"
          onClick={() => dispatch({ type: "toggleBookmark" })}
          className={`gap-4 ${bookmarked ? "bg-primary-50 text-primary-800 hover:text-primary-500" : ""}`}
        >
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                className={`transition-all duration-300 ${bookmarked ? "fill-primary-800 group-hover:fill-primary-500" : "fill-neutral-900 group-hover:fill-neutral-700"}`}
                cx="28"
                cy="28"
                r="28"
              />
              <path
                className={`transition-colors duration-300 ${bookmarked ? "fill-white" : "fill-neutral-300"}`}
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </svg>
          <span className="hidden sm:block">
            {bookmarked ? "Bookmarked" : "Bookmark"}
          </span>
        </Button>
      </div>
    </Card>
  );
}
