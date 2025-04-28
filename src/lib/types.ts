import { ReactNode } from "react";

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export type HeaderProps = {
  appName: string;
};
