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
      <div className="ambient-orb absolute left-[-120px] top-[120px] h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="ambient-orb absolute right-[-80px] top-40 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] gap-5 px-4 pb-10 pt-4 sm:px-6 xl:px-8">
        <aside className="hidden xl:block xl:w-[280px] xl:shrink-0">
          <div className="sticky top-4 flex h-[calc(100vh-2rem)] flex-col rounded-[32px] border border-white/10 bg-surface/88 p-5 shadow-[0_24px_80px_rgba(3,7,18,0.48)] backdrop-blur">
            <BrandMark href="/wallet" />

            <div className="mt-8">
              <WalletNavigation orientation="vertical" />
            </div>

            <div className="mt-auto space-y-4">
              <div className="rounded-[24px] border border-sky-300/16 bg-[linear-gradient(180deg,rgba(59,130,246,0.14),rgba(8,14,30,0.82))] p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-100/72">
                  Guidance
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <GuidanceBadge />
                </div>
                <p className="mt-3 text-sm text-white/58">Selun x402 live.</p>
              </div>

              <ButtonLink href="/start" variant="secondary" className="w-full">
                Restart Setup
              </ButtonLink>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-4 z-30 mb-6 xl:hidden">
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
    </div>
  );
}

