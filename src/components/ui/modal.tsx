import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type ModalType = {
  modalTrigger: React.ReactNode;
  children: React.ReactNode;
};

export function ModalLayout({ modalTrigger, children }: ModalType) {
  return (
    <Dialog>
      <DialogTrigger asChild>{modalTrigger}</DialogTrigger>
      <DialogContent className="border-none">{children}</DialogContent>
    </Dialog>
  );
}
