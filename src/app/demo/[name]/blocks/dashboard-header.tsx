import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <h1 className="text-2xl font-bold">My Requests</h1>
        <Button variant="primary" size="default">
          Add Request
        </Button>
      </div>
    </header>
  );
}
