import Header from "@/components/Header/Header";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="">
        <ThemeProvider
          attribute={"class"}
          enableSystem={false}
        >
          <Header />

          <main className="mx-auto max-w-screen-lg px-6 py-2">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
