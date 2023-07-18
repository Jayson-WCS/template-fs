import CardProject from "./CardProject";

export default function ProjectSection() {
  return (
    <div className="min-h-screen">
    <h2 className="text-3xl m-auto">Projects</h2>
      <div className=" flex items-center flex-wrap justify-center gap-5 m-auto">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </div>
  )
}