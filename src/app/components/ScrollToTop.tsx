import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router';

export function ScrollToTopLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
}
