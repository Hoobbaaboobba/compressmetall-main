import ReactGA from "react-ga";

const TRACKING_ID = "G-JZL881ECC3";
ReactGA.initialize(TRACKING_ID);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
