import '@/styles/dcp.module.scss';
import Head from "next/head";
import React, { Fragment, FC } from "react";
import { Inter } from "next/font/google";
import { IPageWrapperProps } from "@/global/types";
import { useTheme } from "@/branding/theme/context";
import { pageMetaStaticContent } from "@/global/constants";

const inter = Inter({ subsets: ["latin"] });

const PageWrapper: FC<IPageWrapperProps> = ({
  children,
  title
}: IPageWrapperProps) => {
  const { theme } = useTheme();
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={pageMetaStaticContent}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${inter.className}`}
        style={
          {
            ...theme,
          } as React.CSSProperties
        }
      >{children}</main>
    </Fragment>
  );
};

export default PageWrapper;
