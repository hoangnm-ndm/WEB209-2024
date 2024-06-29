import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { productSchema } from "../utils/valtidation";
import { Product } from "../interfaces/Product";

type Props = {
  onSubmit: (data: Product) => void
};

const ProductForm = ({ onSubmit}: Props) => {
	const { id } = useParams();
  const {
    register, 
    formState: { errors },
    reset,
    handleSubmit
  } = useForm<Product>({
    resolver: zodResolver(productSchema)
  })

  // const onSubmit = (data: Product) => {
  //   console.log(data)
  // }
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>{id ? "Edit product" : "Add product"}</h1>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						title
					</label>
					<input className="form-control" type="text" {...register("title", {required: true})} />
          {errors.title && <span className="text-danger">{errors.title.message}</span>}
				</div>

        <div className="mb-3">
					<label htmlFor="price" className="form-label">
						price
					</label>
					<input className="form-control" type="number" {...register("price", {required: true, valueAsNumber: true})} />
          {errors.price && (<span className="text-danger">{errors?.price.message}</span>)}
				</div>

        <div className="mb-3">
					<label htmlFor="description" className="form-label">
						description
					</label>
					<textarea className="form-control" rows={4} {...register("description")} />
				</div>

				<div className="mb-3">
					<button className="btn btn-primary w-100">{id ? "Edit product" : "Add product"}</button>
				</div>
			</form>
		</div>
		// {isMarried ? "da co vk" : "ế"}
	);
};

export default ProductForm;
