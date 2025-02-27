import "./globals.css";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
