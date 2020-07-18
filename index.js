const needle = require("needle");
const { tsv2json, json2tsv } = require('tsv-json');
const http = require("http");
const url = require("url");
const fs = require("fs");
const gis = require('g-i-s');
const port = process.env.PORT || 3000;
http.createServer(runServer).listen(port);
async function runServer(request,response) {
	const u = url.parse(request.url);
	const path = u.pathname;
	console.log(u);
	console.log(u.query);
	console.log(u.query.term);
	if (path.includes("/api/")) {
		// api/download json/tsv
		if (path.includes("/api/raw/")) {
			if (path == "/api/raw/psx" | path == "/api/raw/psx/") {
				var rUrl = "https://nopaystation.com/tsv/PSX_GAMES.tsv";
			} else if (path == "/api/raw/psm" | path == "/api/raw/psm/") {
				var rUrl = "https://nopaystation.com/tsv/PSM_GAMES.tsv";
			} else if (path == "/api/raw/psp/games" | path == "/api/raw/psp/games/") {
				var rUrl = "https://nopaystation.com/tsv/PSP_GAMES.tsv";
			} else if (path == "/api/raw/psp/dlc" | path == "/api/raw/psp/dlc/") {
				var rUrl = "https://nopaystation.com/tsv/PSP_DLCS.tsv";
			} else if (path == "/api/raw/psp/themes" | path == "/api/raw/psp/themes/") {
				var rUrl = "https://nopaystation.com/tsv/PSP_THEMES.tsv";
			} else if (path == "/api/raw/psp/updates" | path == "/api/raw/psp/updates") {
				var rUrl = "https://nopaystation.com/tsv/PSP_UPDATES.tsv";
			} else if (path == "/api/raw/ps3/games" | path == "/api/raw/ps3/games/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_GAMES.tsv";
			} else if (path == "/api/raw/ps3/dlc" | path == "/api/raw/ps3/dlc/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_DLCS.tsv";
			} else if (path == "/api/raw/ps3/themes" | path == "/api/raw/ps3/themes/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_THEMES.tsv";
			} else if (path == "/api/raw/ps3/avatars" | path == "/api/raw/ps3/avatars/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_AVATARS.tsv";
			} else if (path == "/api/raw/ps3/demos" | path == "/api/raw/ps3/demos/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_DEMOS.tsv";
			} else if (path == "/api/raw/vita/games" | path == "/api/raw/vita/games/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_GAMES.tsv";
			} else if (path == "/api/raw/vita/dlc" | path == "/api/raw/vita/dlc/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_DLCS.tsv";
			} else if (path == "/api/raw/vita/themes" | path == "/api/raw/vita/themes/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_THEMES.tsv";
			} else if (path == "/api/raw/vita/updates" | path == "/api/raw/vita/updates/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_UPDATES.tsv";
			} else if (path == "/api/raw/vita/demos" | path == "/api/raw/vita/demos/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_DEMOS.tsv";
			}
			needle.get(rUrl,function(err,res,body){
				response.writeHead(200,{
					"Access-Control-Allow-Origin": "*"
				})
				response.end(body);
			})
		} else if ("/api/image/") {
			var data = u.query.term;
			gis(data, function(error, results) {
				var opt = {
					"Accept":"image/*",
					"Connection":"keep-alive",
					"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:78.0) Gecko/20100101 Firefox/78.0"
				}
				needle(results[0].url,function(err,resp,body){
					console.log(results[0].url);
					console.log(resp);
					response.writeHead(resp.statusCode)
					response.end(body);
				})
			})
		} else {
			if (path == "/api/psx" | path == "/api/psx/") {
				var rUrl = "https://nopaystation.com/tsv/PSX_GAMES.tsv";
			} else if (path == "/api/psm" | path == "/api/psm/") {
				var rUrl = "https://nopaystation.com/tsv/PSM_GAMES.tsv";
			} else if (path == "/api/psp/games" | path == "/api/psp/games/") {
				var rUrl = "https://nopaystation.com/tsv/PSP_GAMES.tsv";
			} else if (path == "/api/psp/dlc" | path == "/api/psp/dlc/") {
				var rUrl = "https://nopaystation.com/tsv/PSP_DLCS.tsv";
			} else if (path == "/api/psp/themes" | path == "/api/psp/themes/") {
				var rUrl = "https://nopaystation.com/tsv/PSP_THEMES.tsv";
			} else if (path == "/api/psp/updates" | path == "/api/psp/updates") {
				var rUrl = "https://nopaystation.com/tsv/PSP_UPDATES.tsv";
			} else if (path == "/api/ps3/games" | path == "/api/ps3/games/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_GAMES.tsv";
			} else if (path == "/api/ps3/dlc" | path == "/api/ps3/dlc/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_DLCS.tsv";
			} else if (path == "/api/ps3/themes" | path == "/api/ps3/themes/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_THEMES.tsv";
			} else if (path == "/api/ps3/avatars" | path == "/api/ps3/avatars/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_AVATARS.tsv";
			} else if (path == "/api/ps3/demos" | path == "/api/ps3/demos/") {
				var rUrl = "https://nopaystation.com/tsv/PS3_DEMOS.tsv";
			} else if (path == "/api/vita/games" | path == "/api/vita/games/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_GAMES.tsv";
			} else if (path == "/api/vita/dlc" | path == "/api/vita/dlc/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_DLCS.tsv";
			} else if (path == "/api/vita/themes" | path == "/api/vita/themes/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_THEMES.tsv";
			} else if (path == "/api/vita/updates" | path == "/api/vita/updates/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_UPDATES.tsv";
			} else if (path == "/api/vita/demos" | path == "/api/vita/demos/") {
				var rUrl = "https://nopaystation.com/tsv/PSV_DEMOS.tsv";
			} else {
				var d = JSON.stringify({
					"err":"noEndpoint"
				})
				response.writeHead(404,{
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json"
				});
				response.end(d);
				return;
			}
			needle.get(rUrl, function(err,resp,body) {
				var a = JSON.stringify(tsv2json(body))
				var d = JSON.parse(a);
				var e = [];
				for (var c in d) {
					if (path.includes("/psx")) {
						// psx data
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"directLink":d[c][3],
							"modifiedDate":d[c][5],
							"originalName":d[c][6],
							"fileSizeReadable":formatBytes(d[c][7]),
							"fileSize":d[c][7],
							"sha256":d[c][8]
						}
						e.push(b);
					} else if (path.includes("/psm")) {
						// psm data
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"directLink":d[c][3],
							"zRif":d[c][4],
							"contentId":d[c][5],
							"modifiedDate":d[c][6],
							"fileSizeReadable":formatBytes(d[c][7]),
							"fileSize":d[c][7],
							"sha256":d[c][8]
						}
						e.push(b);
					} else if (path.includes("/psp/games")){
						// psp games
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"type":d[c][2],
							"name":d[c][3],
							"directLink":d[c][4],
							"contentId":d[c][5],
							"modifiedDate":d[c][6],
							"rap":d[c][7],
							"dlRap":d[c][8],
							"fileSizeReadable":formatBytes(d[c][9]),
							"fileSize":d[c][9],
							"sha256":d[c][10]
						}
						e.push(b);
					} else if (path.includes("/psp/")) {
						// psp dlc, themes, game updates
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"directLink":d[c][3],
							"contentId":d[c][4],
							"modifiedDate":d[c][5],
							"rap":d[c][6],
							"dlRap":d[c][7],
							"fileSizeReadable":formatBytes(d[c][8]),
							"fileSize":d[c][8],
							"sha256":d[c][9]
						}
						e.push(b);
					} else if (path.includes("/ps3/")) {
						// ps3 data
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"directLink":d[c][3],
							"rap":d[c][4],
							"contentId":d[c][5],
							"lastModified":d[c][6],
							"dlRap":d[c][7],
							"fileSizeReadable":formatBytes(d[c][8]),
							"fileSize":d[c][8],
							"sha256":d[c][9]
						}
						e.push(b);
					} else if (path.includes("/vita/games") | path.includes("/vita/dlc") | path.includes("/vita/demos")){
						// vita games, dlc, and demos
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"directLink":d[c][3],
							"zRif":d[c][4],
							"contentId":d[c][5],
							"lastModified":d[c][6],
							"originalName":d[c][7],
							"fileSizeReadable":formatBytes(d[c][8]),
							"fileSize":d[c][8],
							"sha256":d[c][9]
						}
						e.push(b);
					} else if (path.includes("/vita/themes")) {
						// vita themes
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"directLink":d[c][3],
							"zRif":d[c][4],
							"contentId":d[c][5],
							"lastModified":d[c][6],
							"fileSizeReadable":formatBytes(d[c][7]),
							"fileSize":d[c][7],
							"sha256":d[c][8],
							"requiredFirmware":d[c][9]
						}
						e.push(b);
					} else if (path.includes("/vita/updates")) {
						// vita updates
						var b = {
							"titleId":d[c][0],
							"region":d[c][1],
							"name":d[c][2],
							"version":d[c][3],
							"requiredFirmware":d[c][4],
							"directLink":d[c][5],
							"lastModified":d[c][6],
							"fileSizeReadable":formatBytes(d[c][7]),
							"fileSize":d[c][7],
							"sha256":d[c][8],
						}
						e.push(b);
					}
				}
				var e = JSON.stringify(e);
				response.writeHead(200,{
					"Access-Control-Allow-Origin": "*",
					"Content-Type": "application/json"
				});
				response.end(e);
			})
		}
	} else {
		if (!path.includes(".")) {
			var file = "./web-content/" + path + "/index.html";
			fs.readFile(file, function(err,data) {
				if (err) {
					if (err.code == "ENOENT") {
						response.writeHead(404);
						response.end("404");
					} else {
						response.writeHead(404);
						response.end("unknown error");
					}
				} else {
					response.end(data);
				}
			})
		} else {
			var file = "./web-content/" + path;
			fs.readFile(file, function(err,data) {
				if (err) {
					if (err.code == "ENOENT") {
						response.writeHead(404);
						response.end("404");
					} else {
						response.writeHead(404);
						response.end("unknown error");
					}
				} else {
					response.end(data);
				}
			})
		}
	}
}
function formatBytes(bytes, decimals = 2) {
	var bytes = parseInt(bytes);
	if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}