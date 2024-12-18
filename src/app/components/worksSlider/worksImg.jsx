import { getWorks } from "@/../libs/client";
import WorksSlider from "./worksSlider";

export default async function Page() {
  const { contents } = await getWorks();

  return <WorksSlider contents={contents} />;
}
