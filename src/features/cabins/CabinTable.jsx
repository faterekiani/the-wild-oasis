/* eslint-disable no-unused-vars */
import Spinner from "../../ui/Spinner";
import CobinRow from "../../features/cabins/CabinRow";
import useCabins from "./useCabins";
import { useSearchParams } from "react-router-dom";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";

function CabinTable() {
  const { isLoading, cabins } = useCabins(); //custom hook
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  // FILTER
  const filtredValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filtredValue === "all") filteredCabins = cabins;
  if (filtredValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filtredValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // SORT
  const getSortByfromUrl = searchParams.get("SortBy") || "startDate-asc";
  const [field, direction] = getSortByfromUrl.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CobinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
export default CabinTable;
