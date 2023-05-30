import { LayoutStyled } from 'components/Layout/Layout.Styled';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
export function Layout() {
  return (
    <LayoutStyled>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutStyled>
  );
}
