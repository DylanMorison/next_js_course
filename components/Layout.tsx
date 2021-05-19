import React from "react";
import Head from "next/head";
import styles from '../styles/Layout.module.css'

type props = {
	children: any;
	title?: string;
	keywords?: string;
	description?: string;
};

const Layout = ({
	children,
	title = "DJ Events | Find the hottest parties",
	keywords = "Im lazy",
	description = "Im lazy"
}: props) => {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default Layout;
