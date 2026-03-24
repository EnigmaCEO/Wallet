import { mockOnboardingResponses } from "@/data/onboarding";
import type { DemoWalletStage, DemoWalletState, OnboardingResponse } from "@/types/demo";

export const DEMO_WALLET_STORAGE_KEY = "sagitta.demo.wallet";
export const DEMO_WALLET_EVENT_NAME = "sagitta-demo-wallet-change";
export const DEMO_FUNDING_AMOUNT = 10000;

function getStageFromProfile(profile: OnboardingResponse): DemoWalletStage {
  return profile.startMode === "Guided allocation" ? "allocated" : "funded";
}

export function createDemoWalletState(
  profile: OnboardingResponse,
): DemoWalletState {
  return {
    profile,
    fundingAmount: DEMO_FUNDING_AMOUNT,
    fundingAsset: "USDC",
    stage: getStageFromProfile(profile),
    updatedAt: new Date().toISOString(),
  };
}

export function markDemoWalletAllocated(
  state: DemoWalletState,
): DemoWalletState {
  return {
    ...state,
    profile: {
      ...state.profile,
      startMode: "Guided allocation",
    },
    stage: "allocated",
    updatedAt: new Date().toISOString(),
  };
}

export const defaultDemoWalletState = createDemoWalletState(
  mockOnboardingResponses,
);

function isValidProfile(profile: unknown): profile is OnboardingResponse {
  if (!profile || typeof profile !== "object") {
    return false;
  }

  const record = profile as Record<string, unknown>;

  return (
    typeof record.objective === "string" &&
    typeof record.horizon === "string" &&
    typeof record.risk === "string" &&
    typeof record.startMode === "string"
  );
}

function normalizeDemoWalletState(value: unknown): DemoWalletState | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const record = value as Record<string, unknown>;

  if (!isValidProfile(record.profile)) {
    return null;
  }

  const stage =
    record.stage === "funded" || record.stage === "allocated"
      ? record.stage
      : getStageFromProfile(record.profile);

  return {
    profile: record.profile,
    fundingAmount:
      typeof record.fundingAmount === "number" ? record.fundingAmount : DEMO_FUNDING_AMOUNT,
    fundingAsset: record.fundingAsset === "USDC" ? "USDC" : "USDC",
    stage,
    updatedAt:
      typeof record.updatedAt === "string"
        ? record.updatedAt
        : new Date().toISOString(),
  };
}

export function readDemoWalletStateFromStorage(): DemoWalletState | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(DEMO_WALLET_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return normalizeDemoWalletState(JSON.parse(rawValue));
  } catch {
    return null;
  }
}

export function saveDemoWalletStateToStorage(state: DemoWalletState) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(DEMO_WALLET_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new Event(DEMO_WALLET_EVENT_NAME));
}

export function getPersistedDemoWalletState() {
  return readDemoWalletStateFromStorage() ?? defaultDemoWalletState;
}
