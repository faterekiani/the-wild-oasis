import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

export default function Settings() {
  return (
    <Row>
      <Heading>Update hotel settings</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}
