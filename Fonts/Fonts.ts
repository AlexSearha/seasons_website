import { EB_Garamond, Girassol } from "next/font/google";

export const girassol = Girassol({
  variable: "--font-girassol-title",
  subsets: ["latin"],
  weight: ["400"],
});

export const ebGarmond = EB_Garamond({
  variable: "--font-eb_garmond-mono",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});
