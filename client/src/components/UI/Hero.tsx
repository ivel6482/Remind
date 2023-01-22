export function Hero({ exercise }: {
  exercise: any
}) {

  return (
    <section>
      <img src={exercise.thumbnail} alt={exercise.title} />
      <div className="p-5 space-y-4">
        <h3 className="text-2xl font-semibold">{exercise.title}</h3>
        <p className="text-lg leading-8 text-gray-700">{exercise.description}</p>
        <div></div>
      </div>
    </section>
  )
}
