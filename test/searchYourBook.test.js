const { fetchingData, convertToJson } = require("../src/searchYourBook");

jest.mock("../src/searchYourBook");

describe("Google Books", () => {
	it("Returns a 'fetchingData' function correctly called with a book title", async () => {
		await fetchingData("title");
		expect(fetchingData).toHaveBeenCalledWith("title");
	});

	it("Returns a 'convertToJson' function correctly called with a promise as argument", async () => {
		const pendingPromise = await fetchingData("title");
		await convertToJson(pendingPromise);
		expect(convertToJson).toHaveBeenCalledWith(pendingPromise);
	});
});
