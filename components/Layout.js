import Head from "next/head";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
        <title>{title}</title>
      <Head>{title}</Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Sports Social | Keep up with your friends and Games @ the same time ",
  description:
    "A Website that brings you the drop on the latest games, teams , and players in the sport thats in season at the time ",
  keywords:
    "crypto , Nba , basketball , players , games , lebron , steph , friends ",
};
