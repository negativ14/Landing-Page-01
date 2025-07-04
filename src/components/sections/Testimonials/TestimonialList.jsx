import Testimonial from "./Testimonial";

function TestimonialList({ testimonials }){
    return <ul className="flex flex-col gap-y-6">
        { testimonials.map((test) => (
            <Testimonial key={test.id} test={test} />
        ))}
    </ul>
}

export default TestimonialList;