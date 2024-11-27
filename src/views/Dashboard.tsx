import { useGlobalContextHook } from "../hooks/GlobalContextHook";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  const { title } = useGlobalContextHook();

  return <Layout>{title}</Layout>;
};

export default Dashboard;
