export const getHackerNewsData = async (endpoint) => {
	try {
		const res = await fetch(
			`https://hacker-news.firebaseio.com/v0/${endpoint}.json?print='pretty'`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			}
		);
		return await res.json();
	}	catch(err) {
		// eslint-disable-next-line
		console.log(err);
		alert('Unable to fetch data from the HackerNews API. Check the console for more details of the error.');
	}
}