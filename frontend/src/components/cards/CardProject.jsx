import CardButton from "../buttons/CardButton";

export default function CardProject() {
  return ( 
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title mb-5">Project Title</h2>
      <p className="leading-7">If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions mt-5">
        <div className="badge badge-primary badge-outline">HTML5</div> 
        <div className="badge badge-secondary badge-outline">CSS</div>
        <div className="badge badge-base badge-outline">JavaScript</div>
      </div>
    </div>
    <CardButton />
  </div>
  )
}