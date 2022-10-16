import { Outlet } from "~/components/lib/router/Outlet";
import { ErrorBoundary } from "~/components/provider/ErrorBoundary";
import { Suspense } from "~/components/provider/Suspense";

export const FetchProvider = () => {
  return (
    <ErrorBoundary>
      <Suspense>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};
