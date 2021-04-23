import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Global from "./shared/Global";
import Router from "./Router";

import "./i18n/i18n";
import { useTranslation } from "react-i18next";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://609b719a369b4c6d8e9335c8b47a00d7@o576316.ingest.sentry.io/5729758",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

const App: React.FC = () => {
  const { t } = useTranslation<string>();
  const locale = document.documentElement.lang;

  return (
    <HelmetProvider>
      <Helmet htmlAttributes={{ lang: locale === "en" ? "en" : "cs" }}>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta property="twitter:title" content={t("title")} />
        <meta property="twitter:description" content={t("description")} />
        <meta property="og:title" content={t("title")} />
        <meta property="og:description" content={t("description")} />
      </Helmet>
      <Global />
      <Router />
    </HelmetProvider>
  );
};

export default App;
