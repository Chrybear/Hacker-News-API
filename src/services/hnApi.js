import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const newStoriesURL = '${baseURL}newstories.json';

export const storyURL = '${baseURL}item/';

export const getStory = async storyID =>{
	const res = await axios.get('${storyURL + storyID}.json').then(({data}) => data);
	return res;
}
export const getStoryIDs = async () => {
	const res = await axios.get(newStoriesURL).then(({data}) => data);
	return res;
}