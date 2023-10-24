import { create } from "zustand";

interface CatalogStore {
  isOpenCatalog: boolean;
  openCatalog: () => void;
}

const useCatalogModal = create<CatalogStore>((set) => ({
  isOpenCatalog: false,
  openCatalog: () => set((state) => ({ isOpenCatalog: !state.isOpenCatalog })),
}));

export default useCatalogModal;
