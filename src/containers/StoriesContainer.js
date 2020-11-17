import React, {useEffect, useState} from 'react';
import {getStoryIDs, getStory} from '../services/hnApi';
import {Story} from '../components/Story';

export const StoriesContainer = () => {
	const [storyIDs, setStoryIDs] = useState([]);

	useEffect(() =>{
		getStoryIDs().then(data => setStoryIDs(data));
	}, []);

	return storyIDs.map(storyID => ( <Story storyID={story}/>));
};