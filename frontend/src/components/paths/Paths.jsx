import StudyPath from "./StudyPath";
import ProPath from "./ProPath";

export default function Paths() {
  return (
    <div>
      <h2>Parcours Professionnel</h2>
      <ProPath />
      <h2>Parcours Personnel</h2>
      <StudyPath />
    </div>
  )
}