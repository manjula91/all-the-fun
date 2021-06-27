/**
 * This file resolves the entry assets available from our client bundle.
 */

import fs from "fs"
import path from "path"

let resultCache

const readAssetsJSONFile = assetsFilePath => {
	try {
		return JSON.parse(fs.readFileSync(assetsFilePath, "utf8"))
	} catch (e) {
		return ""
	}
}

const loadAssetsInMemory = () => {
	const assetsFilePath = path.resolve("public", "build", "stats.json")

	if (!fs.existsSync(assetsFilePath)) {
		throw new Error(
			`We could not find the "${assetsFilePath}" file, which contains a list of the assets of the client bundle.  Please ensure that the client bundle has been built.`
		)
	}

	const assetsJSONCache = readAssetsJSONFile(assetsFilePath)

	return assetsJSONCache
}

/**
 * Retrieves the js/css for the named chunks that belong to our client bundle.
 *
 * Note: the order of the chunk names is important. The same ordering will be
 * used when rendering the scripts.
 *
 * This is useful to us for a couple of reasons:
 *   - It allows us to target the assets for a specific chunk, thereby only
 *     loading the assets we know we will need for a specific request.
 *   - The assets are hashed, and therefore they can't be "manually" added
 *     to the render logic.  Having this method allows us to easily fetch
 *     the respective assets simply by using a chunk name. :)
 */
export default function getClientBundleEntryAssets() {
	if (!resultCache) {
		resultCache = {}
		// Wrap assets reading tasks in try-catch block to avoid complete inresponsive ness for the server
		try {
			resultCache = loadAssetsInMemory()
		} catch (e) {
			console.log("Could not load assets for Desktop site : ", e) // eslint-disable-line
		}
	}

	resultCache.path = "/build"

	return resultCache
}
