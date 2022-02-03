import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <div className="hover:red">sample post .</div>
        {/* group 親の状態に基づいてstylingできる 兄弟はpeer- */}
        <a
          href="#"
          className="group block p-6 mx-auto space-y-3 max-w-xs bg-white hover:bg-sky-500 rounded-lg ring-slate-900/5 hover:ring-sky-500 shadow-lg"
        >
          <div className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            ></svg>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-white">
              New project
            </h3>
          </div>
          <p className="text-sm text-slate-500 group-hover:text-white">
            Create a new project from a variety of starting templates.
          </p>
        </a>
        {/* details */}
        <div className="p-8 mx-auto max-w-lg">
          <details
            className="p-6 open:bg-white dark:open:bg-slate-900 rounded-lg open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg"
            open
          >
            <summary className="text-sm font-semibold leading-6 text-slate-900 dark:text-white select-none">
              Why do they call it Ovaltine?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
            </div>
          </details>
        </div>
      </Layout>
    </>
  );
}
