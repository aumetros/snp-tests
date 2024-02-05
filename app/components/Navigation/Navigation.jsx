'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Typography, Button } from 'ui';
import { SPAN1, GRAYSCALE_WHITE } from 'utils/constants/variants';
import { HEADER } from 'utils/constants/modes';

export default function Navigation() {
	const pathname = usePathname();
	const router = useRouter();

	function handleLoginClick() {
		router.push('/login');
	}

	function handleRegisterClick() {
		router.push('/register');
	}

	switch (pathname) {
		case '/login':
			return (
				<Button type="button" mode={HEADER} onClick={handleRegisterClick}>
					<Typography variant={SPAN1} color={GRAYSCALE_WHITE}>
						Регистрация
					</Typography>
				</Button>
			);
		case '/register':
			return (
				<Button type="button" mode={HEADER} onClick={handleLoginClick}>
					<Typography variant={SPAN1} color={GRAYSCALE_WHITE}>
						Войти
					</Typography>
				</Button>
			);
	}
}
