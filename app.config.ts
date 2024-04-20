export default defineAppConfig({
	vercelAnalytics: {
		mode: 'auto',
		debug: true,
		beforeSend: (event) => {
			if (event.url.includes('/private')) return null;

			return event;
		},
	},
});
