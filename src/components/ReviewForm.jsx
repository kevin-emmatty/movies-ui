import { Button, Form } from "react-bootstrap";

const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextArea ">
				<Form.Label></Form.Label>
				<Form.Control
					ref={revText}
					as="textarea"
					rows={3}
					defaultValue={defaultValue}
				/>
			</Form.Group>
			<Button variant="outlione-info" onClick={handleSubmit}>
				Submit
			</Button>
		</Form>
	);
};

export default ReviewForm;
