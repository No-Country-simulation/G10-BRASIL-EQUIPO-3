import {lazy, Suspense} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Layout} from './components/Layout';
import {ThemeProvider} from './context/ThemeContext';
import {SettingsProvider} from './context/SettingsContext';
import {AuthProvider} from './context/AuthContext';
import {RequireAuth} from './components/RequireAuth';
import Login from './pages/Login';
import {ToastProvider} from './context/ToastContext';
import Process from './pages/Process';
import Documents from './pages/Documents';
import DocumentDetail from './pages/DocumentDetail';
import Review, {LegacyReviewRedirect} from './pages/Review';
import {LoadingState} from './components/States';
import Settings from './pages/Settings';
const Dashboard = lazy(() => import('./pages/Dashboard'));

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <SettingsProvider>
          <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<RequireAuth />}>
              <Route element={<Layout />}>
                <Route index element={<Navigate to="/processar" replace />} />
                <Route path="/processar" element={<Process />} />
                <Route path="/documentos" element={<Documents />} />
                <Route path="/documentos/:id" element={<DocumentDetail />} />
                <Route path="/revisao/:id" element={<Review />} />
                <Route path="/configuracoes" element={<Settings />} />
                <Route
                  path="/dashboard"
                  element={
                    <Suspense fallback={<LoadingState />}>
                      <Dashboard />
                    </Suspense>
                  }
                />

                {/* Rotas da versão anterior */}
                <Route path="/upload" element={<Navigate to="/processar" replace />} />
                <Route path="/fila" element={<Navigate to="/processar?tab=pendentes" replace />} />
                <Route path="/historico" element={<Navigate to="/documentos" replace />} />
                <Route path="/revisao" element={<LegacyReviewRedirect />} />
                <Route path="*" element={<Navigate to="/processar" replace />} />
              </Route>
              </Route>
            </Routes>
          </BrowserRouter>
          </AuthProvider>
        </SettingsProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
