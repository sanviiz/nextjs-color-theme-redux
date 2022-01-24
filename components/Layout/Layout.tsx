import React from 'react'
import Header from '@layout/Header'
import Footer from '@layout/Footer'

const Layout = ({ children }) => {
	return (
		<>
			<div className="font-sans antialiased sm:max-w-sm sm:mx-auto bg-white cursor-default">
				<Header />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
