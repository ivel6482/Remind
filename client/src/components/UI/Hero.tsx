import { Link } from "react-router-dom"

export function Hero({ exercise }: {
  exercise: any
}) {

  return (
    <section className="grid max-w-5xl grid-cols-1 mx-auto md:grid-cols-2 md:mt-10">
      <img src={exercise.thumbnail} alt={exercise.title} />
      <div className="p-5 space-y-4 md:pt-0">
        <h3 className="text-2xl font-semibold">{exercise.title}</h3>
        <p className="text-lg leading-8 text-gray-700">{exercise.description}</p>
        <div><Link to={`/exercises/${exercise._id}`}>See exercise</Link></div>
      </div>
    </section>
  )
}
