import { create } from "zustand";

interface RequestStore {
  defaultValue: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  setDefaultValue: (value: string) => void;
}

const useRequestModal = create<RequestStore>((set) => ({
  defaultValue: "request",
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setDefaultValue: (value) => set({ defaultValue: value }),
}));

export default useRequestModal;
