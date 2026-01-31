import { redirect } from "next/navigation";

export default function Home() {
  redirect("/docs/user-guides/quick-start/introduction");
}
