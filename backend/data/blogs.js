const blogs = [
	{
		title: 'First Blog',
		description: 'This is the first blog',
		paragraphs: [
			{
				subtitle: 'This is the sub Title',
				content:
					'Here is the paragraph. <strong>This is highlighted text</strong> and <a href="/contact">internal link to contact</a> and <a href="https://www.google.com " target="_blank">external link</a>',
				image: {
					path: '/images/rocket.jpg',
					label: 'rocket'
				}
			}
		]
	}
];

export default blogs;
