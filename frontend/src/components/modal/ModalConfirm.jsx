export default function ModalConfirm() {
  return (
    <>
      <button className="btn btn-secondary mt-5" onClick={()=>window.my_modal_2.showModal()}>Send</button>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <p className="py-4">Thank you for reaching out !</p>
        </form>
      </dialog>
    </>
  )
}