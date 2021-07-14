import { Spinner } from 'react-bootstrap'

export default function Loading() {
	return (
		<div className="loading-screen">
			<Spinner animation="border" role="status" variant="danger">
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
	)
}