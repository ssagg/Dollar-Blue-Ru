import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
const baseUrlUsd = "https://dolarapi.com/v1/dolares";
const baseUrlEur = "https://api.bluelytics.com.ar/v2/latest";
const evolution = "https://api.bluelytics.com.ar/v2/evolution.json";

export const useCurrencyStore = create((set) => ({
  currenciesUsd: [],
  currenciesEur: [],
  evolution: [],
  isLoading: false,
  error: null,
  fetchCurrenciesUsd: async () => {
    set({ isLoading: true });
    try {
      const resp = await fetch(baseUrlUsd);
      if (!resp.ok)
        throw new Error("Ошибка загрузки данных! Попробуйте позже.");
      set({ currenciesUsd: await resp.json(), error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchCurrenciesEur: async () => {
    set({ isLoading: true });
    try {
      const resp = await fetch(baseUrlEur);
      if (!resp.ok)
        throw new Error("Ошибка загрузки данных! Попробуйте позже.");
      set({ currenciesEur: await resp.json(), error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
  fetchEvolution: async () => {
    set({ isLoading: true });
    try {
      const resp = await fetch(evolution);
      if (!resp.ok)
        throw new Error("Ошибка загрузки данных! Попробуйте позже.");
      set({ evolution: await resp.json(), error: null });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

// fetch(baseUrlDolarApi).then((resp) =>
// resp.json().then((data) => {
//   const time = data[0].fechaActualizacion
//     .replace(/T/g, " ")
//     .replace(/.000Z/g, "");

//   setCourse(data);
// })
// );
