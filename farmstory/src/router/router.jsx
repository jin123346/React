import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../pages/main/MainPage";
import LoginPage from "../../pages/user/LoginPage";
import TermsPage from "../../pages/user/TermsPage";
import RegisterPage from "../../pages/user/RegisterPage";
import HelloPage from "../../pages/introduction/HelloPage";
import IntroducePage from "../../pages/introduction/IntroducePage";
import MarketListPage from "../../pages/market/MarketListPage";
import { lazy } from "react";
import { Suspense } from "react";
import MarketViewPage from "../../pages/market/MarketViewPage";

const BoardListPage = lazy(() => import("../../pages/board/ListPage"));
const BoardWritePage = lazy(() => import("../../pages/board/WritePage"));
const BoardViewPage = lazy(() => import("../../pages/board/ViewPage"));
const BoardModifyPage = lazy(() => import("../../pages/board/ModifyPage"));
const AdminMainPage =lazy(() => import("../../pages/admin/MainPage"));
const AdminProductRegisterPage =lazy(() => import("../../pages/admin/RegisterPage"));
const AdminProductListPage =lazy(() => import("../../pages/admin/ListPage"));

const router = createBrowserRouter([
    { path:"/", element: <MainPage />},
    { path:"/introduction/hello",element: <HelloPage />},
    { path:"/introduction/direction",element: <IntroducePage />},
    { path:"/market/list",element: <MarketListPage />},
    { path:"/market/view",element: <MarketViewPage />},
    { path:"/board/list",element: <Suspense><BoardListPage /></Suspense>},
    { path:"/board/write",element: <Suspense><BoardWritePage /></Suspense>},
    { path:"/board/view",element: <Suspense><BoardViewPage /></Suspense>},
    { path:"/board/modify",element: <Suspense><BoardModifyPage /></Suspense>},
    { path:"/user/login",element: <LoginPage />},
    { path:"/user/terms",element: <TermsPage />},
    { path:"/user/register",element: <RegisterPage />},
    { path:"/admin",element: <Suspense><AdminMainPage /></Suspense>},
    { path:"/admin/product/register",element: <Suspense><AdminProductRegisterPage /></Suspense>},
    { path:"/admin/product/list",element: <Suspense><AdminProductListPage /></Suspense>},
]);

export default router;
