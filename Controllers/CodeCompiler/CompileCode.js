
const Axios = require("axios");

const CompiletheCode = (req,res) => {
    let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

	code = JSON.parse(code);
	input = JSON.parse(input);
	
	let data = ({
		"code": code,
		"language": language,
		"input": input
	});
	let config = {
		method: 'post',
        url: "https://api.codex.jaagrav.in",
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	//calling the code compilation API
	let starttime = Date.now();
	Axios(config)
	.then((response) => {
		let runtime = (response.data.timeStamp-starttime)/100; //due to the api time
		console.log(runtime);
		response.data.runtime = runtime;
		res.status(200).json({
			success:true,
			data: JSON.stringify(response.data)
		})
		console.log(response.data)
	}).catch((error) => {
		console.log(error);
	});
}


module.exports = CompiletheCode;
