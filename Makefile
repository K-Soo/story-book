release:
	git push
	(npm i && node_modules/.bin/standard-version)
	git push --follow-tags --tags origin main
	git checkout develop

