import React from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

const Layout = ({ children }) => {
	return (
		<>
			<div className="font-sans antialiased">
				<Header />
				<div className="container mx-auto">{children}</div>
				<Footer />
			</div>
		</>
	)
}

export default Layout
