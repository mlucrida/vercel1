import Image from "next/image";

// So this does not work out so well, you'll need to 
// figure out how to translate your old acu bs coding
// design into modern Next.js stuff
export default function Home() {
  return (
	<div className="container-fluid">
		<div className="d-flex justify-content-between">
			<div className="card">
					<div className="card-header">
						<h1>This is a Card</h1>
					</div>
					<div className="card-body">
						<p>This is it's body</p>
					</div>
			</div>
			<div className="card">
					<div className="card-header">
						<h1>This is a Card</h1>
					</div>
					<div className="card-body">
						<p>This is it's body</p>
					</div>
			</div>
		</div>
	</div>
	);
}
