import ModalConfirm from "../modal/ModalConfirm"

export default function ContactForm() {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center m-auto scroll-smooth" >
    <h3 className="text-3xl">Contact</h3>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Username</span>
        </label>
        <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea className="textarea textarea-bordered h-24" placeholder="Any suggestions are welcome"></textarea>
      </div>
    <ModalConfirm />
    </div>
  )
}