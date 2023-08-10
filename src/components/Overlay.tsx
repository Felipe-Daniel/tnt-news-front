import classNames from "classnames";
import { HTMLAttributes, Ref, forwardRef, useEffect } from "react";

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  isLeaving: boolean;
}

export const Overlay = forwardRef(
  (
    { isLeaving, className, ...rest }: OverlayProps,
    ref: Ref<HTMLDivElement>
  ) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

    return (
      <div
        ref={ref}
        data-leaving={isLeaving}
        className={classNames(
          className,
          "animate__animated animate__fadeIn flex fixed inset-0 items-center justify-center z-50 bg-black bg-opacity-50",
          { animate__fadeOut: isLeaving }
        )}
        {...rest}
      />
    );
  }
);
