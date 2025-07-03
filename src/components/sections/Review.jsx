import {reviews} from "../../utils/content"

function Review() {
  return <section className="m-auto px-24 flex max-w-[90rem] flex-wrap items-center gap-x-4 gap-y-4">
    <ul className="flex ">
        {reviews.map((review) => (
            <li key={review.id} className="-mr-4 last:mr-0">
                <img src={review.src} alt={review.alt} className="border-primary-100 h-12 rounded-full border-2"/>
            </li>
        ))}
    </ul>

    <p className="text-xl/loose text-primary-100 font-light">
        trusted by <span className="text-primary-500 tracking-tighter font-bold">12,600+</span> productivity junkies
    </p>
  </section>;
}
export default Review;
