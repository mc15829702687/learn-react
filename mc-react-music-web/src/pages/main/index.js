import React, { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import routes from "@/router";

import AppPlayBar from '../player/app-play-bar';

import AppHearder from "components/app-header";
import AppFooter from "components/app-footer";

export default function MCMain() {
  return (
    <HashRouter>
      <AppHearder />
      <Suspense fallback={<div>Loading...</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <AppFooter />
      <AppPlayBar/>
    </HashRouter>
  );
}
