export default function ModalConfirm() {
  return (
    <>
      <label htmlFor="my_modal_7" className="btn">Send</label>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Thanks for reaching out !</h3>
          <p className="py-4">I&apos;ll get back to you in the near future.<br/>Have a great rest of your day !</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  )
}