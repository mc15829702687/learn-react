import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { discoverLinks } from '@/services/local-data';

import { DisCoverWrapper, TopMenu } from './style';


export default memo(function MCDiscover(props) {
	return (
		<DisCoverWrapper>
			<div className="top">
				<TopMenu className="wrap-v1">
					{discoverLinks.map((item, index) => {
						return (
							<li className="item" key={item.title}>
								<NavLink to={item.link}>
									{item.title}
								</NavLink>
							</li>
						);
					})}
				</TopMenu>
			</div>
			{renderRoutes(props.route.children)}
		</DisCoverWrapper>
	);
});
