// import { useState } from "react";
// import Modal from "../../ui/Modal";
// import CreateCabinForm from "./CreateCabinForm";
// import { HiPencil } from "react-icons/hi2";

// export default function EditCabinModal({ cabinToEdit = {} }) {
//   const [isOpenModal, setIsOpenModal] = useState();

//   return (
//     <>
//       <button onClick={() => setIsOpenModal((show) => !show)}>
//         <HiPencil />
//       </button>

//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onClose={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//       {isOpenModal && <CreateCabinForm cabinToEdit={cabinToEdit} />}
//     </>
//   );
// }
