import express from "express"
import { VALUE } from "@repo/common/config"
const app = express()

app.get("/app", (req, res) => {
	res.json({
		status: 200,
		error: {},
		message: `Hello form backend ${VALUE}`,
	})
})



app.listen(3002, () => {
	console.log("Server is listening on port 3002");
})



