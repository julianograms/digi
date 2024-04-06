import Header from "./components/Header";
import { Providers } from "./context/Providers";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}
