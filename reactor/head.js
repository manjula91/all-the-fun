/* global window */
import React from "react"

import { ContactPoint, WebsiteSchema, Analytics, description, keywords } from "./SEO"

const Head = () => (
	<head>
		<meta charSet="utf-8" />
		<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, maximum-scale=5, initial-scale=1" />
		<meta name="keywords" content={keywords} />
		<meta name="description" content={description} />
		<link rel="apple-touch-icon" sizes="57x57" href="/assets/favico/apple-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="60x60" href="/assets/favico/apple-icon-60x60.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/assets/favico/apple-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/assets/favico/apple-icon-76x76.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/assets/favico/apple-icon-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/assets/favico/apple-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="144x144" href="/assets/favico/apple-icon-144x144.png" />
		<link rel="apple-touch-icon" sizes="152x152" href="/assets/favico/apple-icon-152x152.png" />
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/favico/apple-icon-180x180.png" />
		<link rel="icon" type="image/png" sizes="192x192" href="/assets/favico/android-icon-192x192.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favico/favicon-32x32.png" />
		<link rel="icon" type="image/png" sizes="96x96" href="/assets/favico/favicon-96x96.png" />
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favico/favicon-16x16.png" />
		<link rel="manifest" href="/assets/favico/manifest.json" />
		<meta name="msapplication-TileColor" content="#ffffff" />
		<meta name="msapplication-TileImage" content="assets/favico/ms-icon-144x144.png" />
		<meta name="theme-color" content="#ffffff" />

		<title>React India - 2021</title>
		<script type="text/javascript" dangerouslySetInnerHTML={{ __html: `window.__SERVER_TIME__ = ${Date.now()}`}} />
		<script
			type="text/javascript"
			dangerouslySetInnerHTML={{
				__html: `if ('serviceWorker' in navigator) {
					navigator.serviceWorker.register('/app-sw.js', {
						scope: '/'
					})
					.then(registration => registration.unregister())
					.catch(err => console.log('Boo!', err));
		}`,
			}}
		/>

		<link rel="shortcut icon" type="image/png" href="/assets/images/favicon.png" />

		<link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css" />

		<link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />

		<link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400i" rel="stylesheet" />


		<Analytics />
		<ContactPoint />
		<WebsiteSchema />

		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-128577365-1" />

	</head>
)

export default Head
