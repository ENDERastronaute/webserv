
import { Metadata } from "next";
import Login from "./page.components";

export const metadata: Metadata = {
  title: "Webserv",
  description: "Web server manager",
};

export default function Home() {
  return (
    <Login></Login>
  )
}
