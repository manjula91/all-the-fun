import React from "react"

import { SITE, CONTACT_NUMBERS } from "./constants"

export const ContactPoint = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: `{
		"@context": "http://schema.org",
		"@type": "Organization",
		"url": "${SITE}",
		"logo": "${SITE}/assets/images/logo.png",
		"contactPoint": [
		{
			"@type": "ContactPoint",
			"telephone": "${CONTACT_NUMBERS[0]}",
			"contactType": "customer service",
			"areaServed": [
				"IN"
			],
			"availableLanguage": [
				"English", "Hindi"
			]
		},
		{
			"@type": "ContactPoint",
			"telephone": "${CONTACT_NUMBERS[1]}",
			"contactType": "customer service",
			"areaServed": [
				"EU"
			],
			"availableLanguage": [
				"English"
			]
		}
		]
		}`,
		}}
	/>
)

export const WebsiteSchema = () => (
	<script
		type="application/ld+json"
		dangerouslySetInnerHTML={{
			__html: `{
			"@context": "http://schema.org",
			"@type": "WebSite",
			"name": "React India 2019",
			"url": "${SITE}"
			}`,
		}}
	/>
)

export const Analytics = () => (
	<script
		dangerouslySetInnerHTML={{
			__html: `window.dataLayer = window.dataLayer || []; function gtag()
		{window.dataLayer.push(arguments)}
		gtag('js', new Date()); gtag('config', 'UA-128577365-1');`,
		}}
	/>
)

export const description = `Do you want to learn about React & React Native?
Then you shouldn't miss React India - Remote edition happening in November 2021!
You will have the opportunity to improve your developer skills and meet people from around the world.`

export const keywords = "React, React Native, React India, React India 2021, React India Remote edition"
