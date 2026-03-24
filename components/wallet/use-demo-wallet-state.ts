"use client";

import { useSyncExternalStore } from "react";

import {
  DEMO_WALLET_EVENT_NAME,
  DEMO_WALLET_STORAGE_KEY,
  defaultDemoWalletState,
  readDemoWalletStateFromStorage,
} from "@/lib/demo-wallet";
import type { DemoWalletState } from "@/types/demo";

let cachedStorageValue: string | null | undefined;
let cachedSnapshot: DemoWalletState = defaultDemoWalletState;

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === DEMO_WALLET_STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleCustomEvent = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(DEMO_WALLET_EVENT_NAME, handleCustomEvent);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(DEMO_WALLET_EVENT_NAME, handleCustomEvent);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return defaultDemoWalletState;
  }

  const storageValue = window.localStorage.getItem(DEMO_WALLET_STORAGE_KEY);

  if (storageValue === cachedStorageValue) {
    return cachedSnapshot;
  }

  cachedStorageValue = storageValue;
  cachedSnapshot = readDemoWalletStateFromStorage() ?? defaultDemoWalletState;

  return cachedSnapshot;
}

export function useDemoWalletState() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => defaultDemoWalletState,
  );
}
