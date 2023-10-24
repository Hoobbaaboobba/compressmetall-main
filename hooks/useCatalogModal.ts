import { create } from "zustand";

interface CatalogStore {
  isOpenCatalog: boolean;
  openCatalog: () => void;
  setCatalog: () => void;
}

const useCatalogModal = create<CatalogStore>((set) => ({
  isOpenCatalog: false,
  openCatalog: () => set((state) => ({ isOpenCatalog: !state.isOpenCatalog })),
  setCatalog: () => set({ isOpenCatalog: false }),
}));

export default useCatalogModal;
