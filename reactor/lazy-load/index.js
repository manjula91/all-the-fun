import React, { Component } from "react"

import { __image, __imageNormal, __imagePreview, __imageWrapper } from "./style"

import Visible from "./Visible"

const LazyImage = ({ src, alt, srcErr, onClick, tinySrc, onLoad, visible, imgClassName, inheritDimension }) => (
	<Visible threshold={2} visible={visible}>
		<Img {...{ src, tinySrc, onLoad, srcErr, alt, onClick, imgClassName, inheritDimension }} />
	</Visible>
)

const defaultPlaceHolder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

class Img extends Component {
	constructor(props) {
		super(props)
		this.state = {
			src: props.tinySrc || defaultPlaceHolder,
			imageRendered: false,
			alt: `placeholder-${props.alt || 'image'}`,
		}

		this.img = null
	}

	componentDidMount() {
		// initial checkup with on componentDidMount. If it were visible, already would receive the state.
		this.initializeImage(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.visible ||
			nextProps.src !== this.props.src ||
			nextProps.alt !== this.props.alt ||
			nextProps.tinySrc !== this.props.tinySrc
		) {
			// looks like the values are different. Now re-render based on new props.
			const isVisible = nextProps.visible
			const wasLoadedPreviously = this.state.imageRendered
			const isSameAsLoaded = this.state.src === nextProps.src || this.state.src === nextProps.srcErr
			if (isVisible && !wasLoadedPreviously) {
				// first time it became visible. Load it a fresh.
				this.initializeImage(nextProps)
			} else if (isVisible && wasLoadedPreviously && !isSameAsLoaded) {
				// This was already loaded. Now reset and reload.
				this.setState(
					{
						imageRendered: false,
						src: nextProps.tinySrc || defaultPlaceHolder,
						alt: `placeholder-${nextProps.alt || "image"}`,
					},
					() => this.initializeImage(nextProps)
				)
			}
		}
	}

	componentWillUnmount() {
		this.img = null
	}

	initializeImage = ({ src, alt, srcErr, visible }) => {
		if (!visible) {
			return
		}

		this.img = document.createElement("img")

		// when image loads, push actual URL to state
		this.img.onload = () => {
			if (this.img)
				this.setState({
					src,
					alt,
					imageRendered: true,
				})
		}

		this.img.onerror = () => {
			if (this.img)
				this.setState({
					src: srcErr || "",
					alt,
					imageRendered: true,
				})
		}

		this.img.src = src || ""
	}

	render() {
		return (
			<img
				className={`${this.props.imgClassName} ${this.state.imageRendered ? "" : "blur"}`}
				src={this.state.src}
				alt={this.state.alt}
				preview={!this.state.imageRendered ? "false" : "true"}
				onLoad={this.props.onLoad}
			/>
		)
	}
}

export default LazyImage
