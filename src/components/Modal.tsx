import { X } from "@phosphor-icons/react";
import { useAnimatedUnmount } from "../hooks/use-animated-unmounted";
import { Overlay } from "./Overlay";
import { ReactPortal } from "./ReactPortal";

import { ReactNode, useEffect } from "react";

export interface ModalProps {
  visible: boolean;
  title: string;
  onCancel: () => void;
  children: ReactNode;
}

export function Modal({ visible, title, onCancel, children }: ModalProps) {
  const { shouldRender, animatedElementRef } =
    useAnimatedUnmount<HTMLDivElement>(visible);

  useEffect(() => {
    function handleKeyUpEsc(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onCancel();
      }
    }

    window.addEventListener("keyup", handleKeyUpEsc);

    return () => {
      window.removeEventListener("keyup", handleKeyUpEsc);
    };
  }, [onCancel]);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible} ref={animatedElementRef}>
        <div className="w-full max-w-md mx-4 p-6 bg-black rounded-md shadow-sm animate__animated animate__zoomIn relative">
          <X
            size={24}
            onClick={onCancel}
            className="rounded-full p-1 cursor-pointer bg-white hover:bg-zinc-200 transition-colors absolute right-3 top-3"
          />

          <h1 className="font-semibold text-xl text-zinc-900">{title}</h1>

          <div className="mt-6">{children}</div>
        </div>
      </Overlay>
    </ReactPortal>
  );
}
