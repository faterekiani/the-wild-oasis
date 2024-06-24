import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import AddCabinModal from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

export default function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabinModal />
      </Row>
    </>
  );
}
