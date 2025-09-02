import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the default locale (Portuguese)
  redirect("/pt");
}
