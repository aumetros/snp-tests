'use client';
import { useSelector } from 'react-redux';
import { selectUsers } from 'store/selectors';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function protectedRoute(Component) {
	return function ProtectedRoute(props) {
		const users = useSelector(selectUsers);

		useEffect(() => {
			if (!users.isLogged) {
				return redirect('/login');
			}
		}, [users.isLogged]);

		// if (!users.isLogged) {
		// 	return null;
		// }

		return <Component {...props} />;
	};
}
