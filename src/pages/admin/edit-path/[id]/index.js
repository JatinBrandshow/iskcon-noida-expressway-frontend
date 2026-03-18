import { useParams } from "next/navigation";
import EditPath from "./EditPath"; // adjust path if needed
import Layout from "../../Components/Layout";

export default function Page() {
  const params = useParams();
  const id = params?.id;

  return (
    <Layout>
        {/* Wait for id to be available */}
        {id && <EditPath pageId={id} />}
      </Layout>
  );
}
