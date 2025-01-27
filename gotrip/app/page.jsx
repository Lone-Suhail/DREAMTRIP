  import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_1/page";

export const metadata = {
  title: "Home-1 || Dream Trip - Travel & Tour React NextJS Template",
  description: "Dream Trip - Travel & Tour React NextJS Template",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
