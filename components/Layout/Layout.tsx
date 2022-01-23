import React from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

const Layout = ({ children }) => {
	return (
		<>
			<div className="font-sans antialiased">
				<Header />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
