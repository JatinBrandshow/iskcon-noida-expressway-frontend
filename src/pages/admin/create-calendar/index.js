import Layout from "../Components/Layout";
import CalendarSection from "../Components/CalendarSection";

export default function CreateCalendarPage() {
  // We can re-use the same section but maybe pass a prop to open form by default if needed
  return (
    <Layout>
      <CalendarSection />
    </Layout>
  );
}
