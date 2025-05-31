import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import { classNames } from "@/utility/classNames";
import Navbar from "@/layout/Navbar/Navbar";
import { routes } from "@/data/navigationRoutes";
import { useTheme } from "next-themes";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Footer = dynamic(() => import("@/layout/Footer"), { ssr: true });

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  const { theme } = useTheme();

  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        {theme === "light" && <Navbar routes={routes} />}
        <main>
          <CursorTrailCanvas
            color="hsla(183, 64%, 27%, 0.4)"
            className="pointer-events-none fixed inset-0 z-10 h-full w-full"
          />
          {props.children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
