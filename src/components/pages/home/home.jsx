

import { Route, Routes } from "react-router-dom";
import { InterFace } from "../../common/interFace";
import { Layout } from "../../common/layout";
import { History } from "../../common/history";
import { WatchLater } from "../../common/watchLater";

export const Home = () => {


  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<InterFace />} />
          <Route path="/history" element={<History />} />
          <Route path="/watchLater" element={<WatchLater />} />
        </Routes>
      </Layout>
    </div>
  );
};
