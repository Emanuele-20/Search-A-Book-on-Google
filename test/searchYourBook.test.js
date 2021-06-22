const { fetchingData, convertToJson } = require("../src/searchYourBook");

jest.mock("../src/searchYourBook");

describe("Google Books", () => {
	it("Returns a function correctly called with a book title", async () => {
		await fetchingData("title");
		expect(fetchingData).toHaveBeenCalledWith("title");
	});

	it("Returns", async () => {
		const fetch = await fetchingData("title");
		const data = await convertToJson(fetch);
		expect(convertToJson).toHaveBeenCalledWith(fetch);
	});
});
