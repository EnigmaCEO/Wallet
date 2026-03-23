import { MarketingFooter } from "@/components/layout/marketing-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="ambient-orb absolute left-[-120px] top-[100px] h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />
      <div className="ambient-orb absolute right-[-100px] top-[240px] h-80 w-80 rounded-full bg-violet-300/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <MarketingFooter />
      </div>
    </div>
  );
}

