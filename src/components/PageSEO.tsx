import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata } from "@/data/siteMetaData.mjs";

type PageSEOProps = {
  title: string;
  description: string;
  ogType: string;
};

export function PageSEO({ title, description, ogType }: PageSEOProps) {
  const router = useRouter();

  const siteUrl = siteMetadata.siteUrl + router.asPath;
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
