import { WalletNavigation } from "@/components/layout/wallet-navigation";
import { BrandMark } from "@/components/shared/brand-mark";
import { ButtonLink } from "@/components/shared/button-link";
import { GuidanceBadge } from "@/components/wallet/guidance-badge";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ambient-orb absolute left-[-120px] top-[120px] h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="ambient-orb absolute right-[-80px] top-40 h-80 w-80 rounded-full bg-violet-300/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30 mb-8 pt-4">
          <div className="rounded-[28px] border border-white/10 bg-surface/90 px-5 py-4 shadow-[0_24px_80px_rgba(3,7,18,0.42)] backdrop-blur">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <BrandMark href="/wallet" />
                <div className="flex flex-wrap items-center gap-3">
                  <GuidanceBadge />
                  <ButtonLink href="/start" variant="secondary">
                    Restart Setup
                  </ButtonLink>
                </div>
              </div>
              <WalletNavigation />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-12 border-t border-white/10 py-6 text-sm text-text-muted">
          Sagitta Wallet demo build. Services and execution are mocked.
        </footer>
      </div>
    </div>
  );
}

