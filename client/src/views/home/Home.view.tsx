import { ReactNode } from "react";
import { HomeViewData, HomeViewConfig } from "./Home.view.spe1c";

const HomeView: React.FC = () => {
  return <HomeViewLayout></HomeViewLayout>;
};
const HomeViewLayout: React.FC = (
  data: HomeViewData,
  config: HomeViewConfig
): ReactNode => {
  return (
    <div>
      <h1>Home Template Layout</h1>
      <div>{JSON.stringify({ data, config })}</div>
    </div>
  );
};

export default HomeView;
