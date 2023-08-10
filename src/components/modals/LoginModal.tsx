import { Modal, ModalProps } from "../Modal";

type LoginModalProps = Omit<ModalProps, "title" | "children">;

export function LoginModal({ ...props }: LoginModalProps) {
  return (
    <Modal title="Login" {...props}>
      <p className="text-zinc-700">Login</p>
    </Modal>
  );
}
